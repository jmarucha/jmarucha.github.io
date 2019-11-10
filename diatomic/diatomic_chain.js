// Copyright 2018 Jan K. Marucha

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

var DiatomicChain = function() {
    this.k1 = 1;
    this.k2 = 1;
    this.m1 = 1;
    this.m2 = 1;
    this.a1 = 1;
    this.a2 = 1;
    this.k = 1;
    this.speed = 0.8;
    this.displayOutline = false;
    this.acusticMode = function (k) {
        var km = (this.k1+this.k2)*(this.m1+this.m2)
        var sin = Math.sin(k/2);
        return Math.sqrt((km - Math.sqrt(km*km - 16*this.m1*this.m2*this.k1*this.k2*sin*sin))/(2*this.m1*this.m2));
    };
    this.opticalMode = function(k) {
        var km = (this.k1+this.k2)*(this.m1+this.m2)
        var sin = Math.sin(k/2);
        return Math.sqrt((km + Math.sqrt(km*km - 16*this.m1*this.m2*this.k1*this.k2*sin*sin))/(2*this.m1*this.m2));
    };
    this.points = function() {
        engineersPI = 3.14
        lowK = - 2*engineersPI;
        highK = + 2*engineersPI;
        var csv = "Wavenumber, Acustic Frequency, Optical Frequency\n";
        for (k = lowK; k <= highK; k+=0.05) {
            csv += k.toFixed(2) + "," + this.acusticMode(k) + "," + this.opticalMode(k) + "\n";
        }
        return csv;
    }
    this.updateChart = function() {
        g = new Dygraph(
            document.getElementById("graphdiv"),
            this.points(),
            {
                title: "Dispersion relation",
                xlabel: "Wavenumber k/a",
                ylabel: "Frequency ω",
                
            }
            );
        this.updateAnimationData();
    };
    this.updateAnimationData = function() {

        this.omegaAcustic = this.acusticMode(this.k)
        var a = this.a = this.a1+this.a2;
        var Breal = (this.k1 * Math.cos(this.k * this.a1/a)
            + this.k2 * Math.cos(this.k * this.a1/a))/
            (this.k1+this.k2 - this.m2 * this.omegaAcustic*this.omegaAcustic);
        var Bim = (this.k1 * Math.sin(this.k * this.a1/a)
            - this.k2 * Math.sin(this.k * this.a2/a))/
            (this.k1+this.k2 - this.m2 * this.omegaAcustic*this.omegaAcustic);
        this.AcusticAmplitude = Math.sqrt(Breal*Breal+Bim*Bim);
        this.AcusticPhaseShift = Math.atan2(Bim, Breal);


        this.omegaOptical = this.opticalMode(this.k)
        var Breal = (this.k1 * Math.cos(this.k * this.a1/a)
            + this.k2 * Math.cos(this.k * this.a1/a))/
            (this.k1+this.k2 - this.m2 * this.omegaOptical*this.omegaOptical);
        var Bim = (this.k1 * Math.sin(this.k * this.a1/a)
            - this.k2 * Math.sin(this.k * this.a2/a))/
            (this.k1+this.k2 - this.m2 * this.omegaOptical*this.omegaOptical);
        this.OpticalAmplitude = Math.sqrt(Breal*Breal+Bim*Bim);
        this.OpticalPhaseShift = Math.atan2(Bim, Breal);

        console.log("fi = "+this.OpticalPhaseShift);
        console.log("B/A = "+this.OpticalAmplitude);

        //for aesthetic purposes - circle radii
        this.r1 = Math.sqrt(this.m1);
        this.r2 = Math.sqrt(this.m2);
    };
};

var Drawer = function(chain, svg) {
    this.uCells = 10;
    this.height = 600;
    this.width = 1200;
    this.chain = chain;
    this.svg = SVG('chain').size(this.width, this.height);
    this.acusticM1 = [];
    this.acusticM2 = [];
    this.opticalM1 = [];
    this.opticalM2 = [];
    this.uCellWidth = this.width/this.uCells;
    for (var i = 0; i < this.uCells; ++i) {
        this.acusticM1.push(this.svg.circle(10).center(this.uCellWidth*(i-0.5*this.chain.a1/this.chain.a+1), 0.25*this.height).fill("#F88"));
        this.acusticM2.push(this.svg.circle(10).center(this.uCellWidth*(i+0.5*this.chain.a1/this.chain.a), 0.25*this.height).fill("#8F8"));
        this.opticalM1.push(this.svg.circle(10).center(this.uCellWidth*(i-0.5*this.chain.a1/this.chain.a+1), 0.75*this.height).fill("#F88"));
        this.opticalM2.push(this.svg.circle(10).center(this.uCellWidth*(i+0.5*this.chain.a1/this.chain.a), 0.75*this.height).fill("#8F8"));
    }

    this.animate = function(t) {
        for (var i = 0; i < this.uCells; ++i) {
            var m1amplitude = 0.15*this.height * (this.chain.AcusticAmplitude <= 1 ? 1 : 1/this.chain.AcusticAmplitude);
            var m2amplitude = 0.15*this.height * (this.chain.AcusticAmplitude <= 1 ? this.chain.AcusticAmplitude : 1);
            this.acusticM1[i].center(this.uCellWidth*(i-0.5*this.chain.a1/this.chain.a+1),
                0.25*this.height+m1amplitude*Math.cos(-this.chain.omegaAcustic*t + this.chain.k*i))
                .radius(this.chain.r1*10);
            this.acusticM2[i].center(this.uCellWidth*(i+0.5*this.chain.a1/this.chain.a),
                0.25*this.height+m2amplitude*Math.cos(-this.chain.omegaAcustic*t + this.chain.k*(i-this.chain.a2/this.chain.a) - this.chain.AcusticPhaseShift))
                .radius(this.chain.r2*10);

            
            m1amplitude = 0.15*this.height * (this.chain.OpticalAmplitude <= 1 ? 1 : 1/this.chain.OpticalAmplitude);
            m2amplitude = 0.15*this.height * (this.chain.OpticalAmplitude <= 1 ? this.chain.OpticalAmplitude : 1);
            
            this.opticalM1[i].center(this.uCellWidth*(i-0.5*this.chain.a1/this.chain.a+1),
                0.75*this.height+m1amplitude*Math.cos(-this.chain.omegaOptical*t + this.chain.k*i))
                .radius(this.chain.r1*10);
            this.opticalM2[i].center(this.uCellWidth*(i+0.5*this.chain.a1/this.chain.a),
                0.75*this.height+m2amplitude*Math.cos(-this.chain.omegaOptical*t + this.chain.k*(i-this.chain.a2/this.chain.a) - this.chain.OpticalPhaseShift))
                .radius(this.chain.r2*10);
        }
    }
}

window.onload = function() {
    console.log();
    var chain = new DiatomicChain();
    var gui = new dat.GUI();
    gui.add(chain, 'k1', 0, 2)
        .onChange(function() {chain.updateChart()})
        .onFinishChange(function() {chain.updateAnimationData();});
    gui.add(chain, 'k2', 0, 2)
        .onChange(function() {chain.updateChart()})
        .onFinishChange(function() {chain.updateAnimationData();});
    gui.add(chain, 'm1', 0, 2)
        .onChange(function() {chain.updateChart()})
        .onFinishChange(function() {chain.updateAnimationData();});
    gui.add(chain, 'm2', 0, 2)
        .onChange(function() {chain.updateChart()})
        .onFinishChange(function() {chain.updateAnimationData();});
    gui.add(chain, 'a1', 0, 2)
        .onFinishChange(function() {chain.updateAnimationData();});
    gui.add(chain, 'a2', 0, 2)
        .onFinishChange(function() {chain.updateAnimationData();});
    gui.add(chain, 'k', 0, 7)
        .onFinishChange(function() {chain.updateAnimationData();});
    chain.updateChart();
    chain.updateAnimationData();
    var  drawer = new Drawer(chain, "chain")
    function animate(timestamp) {
        drawer.animate(0.005*timestamp);
        window.requestAnimationFrame(animate);
    }

    window.requestAnimationFrame(animate)
    window.drawer = drawer;
  };