#!/usr/bin/python
##By Jan K. Marucha, Oxford University
##A simple visualisation of Hopalong Attractor

import pygame
from random import random
from random import sample
import sys
 

dim=20
magn=3 #magnification
speed=500



pygame.init()
screen = pygame.display.set_mode((0,0),pygame.FULLSCREEN )
pygame.mouse.set_visible(0)

size = width, height = screen.get_size()

if len(sys.argv)==4:
	a=float(sys.argv[1])
	b=float(sys.argv[2])
	c=float(sys.argv[3])
else:
	a,b,c=(random()*10-5,random()*10-5,random()*10-5)

color = tuple(sample([255, int(random()*255), 0],3)) #color in rgb


def sign(v):
	if v<0:
		return -1
	else:
		return 1

x=0.0
y=0.0


def iterate():
	global x
	global y
	xx = y - sign(x) * (abs(b*x - c))**0.50
	yy = a-x
	x=xx
	y=yy

def draw():
	if (magn*x>0-width/2 and magn*x<width/2 and magn*y>0-height/2 and magn*y<height/2):
		r,g,b,a=screen.get_at((int(magn*x+width/2.0), int(magn*y+height/2.0)))
	else:
		return
	r2,g2,b2 = color
	screen.set_at((int(magn*x+width/2.0), int(magn*y+height/2.0)), ((dim*r+r2)/(dim+1),(dim*g+g2)/(dim+1),(dim*b+b/(dim+1))))

print a,b,c

while 1:
	for event in pygame.event.get():
		if event.type == pygame.QUIT:
			pygame.quit()
			exit()
		elif event.type == pygame.KEYDOWN:
			if event.key == pygame.K_ESCAPE:
				pygame.quit()
				exit()
	for i in range(speed):
		iterate()
		draw()
	pygame.display.flip()
