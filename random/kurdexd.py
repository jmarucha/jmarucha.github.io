import code

from config import *
from time import sleep
from selenium import webdriver
from re import sub

# THIS PART SHOULD BE EDITED BY USER
login = "my_facebook_login"
password = "my_facebook_password"
group = "Kurde xD"
loading_time = 30
output_file = "output.csv"


def clear_tags(text):
	return sub("<.+?>", "", text.replace("&nbsp;"," "))

file = open(output_file, "w")

browser = webdriver.Chrome()
browser.get('http://sociograph.io/')
if browser.current_url == "https://sociograph.io/landing.html":
	button = browser.find_element_by_css_selector(".e-facebookButton-link")
	button.click()

	browser.switch_to_window(browser.window_handles[1])

	browser.find_element_by_id("email").send_keys(login)
	browser.find_element_by_id("pass").send_keys(password)
	
	browser.find_element_by_name("login").click()
	browser.switch_to_window(browser.window_handles[0])

browser.implicitly_wait(10)

# go to correct group
for i in browser.find_elements_by_css_selector(".specification .title-search-blue"):
	if i.get_attribute("innerHTML") == group:
		i.click()
		break

# select correct timespan
browser.find_element_by_class_name("periodtimeSpan").click();

# click 'Active Members' tab
browser.find_elements_by_class_name("tab")[1].click();

sleep(loading_time)

# click "stop loading"
browser.find_element_by_class_name("button-scan").click();

table = browser.find_element_by_id("usersTable")
file.write("Visitor,Rating,Reactions out,Reactions in,Posts,Shares,Comments out, Comments in,Comment like in\n")
for row in table.find_elements_by_tag_name("tr"):
	line = ""
	for cell in row.find_elements_by_tag_name("td"):
		line += clear_tags(cell.get_attribute("innerHTML"))
		line += ","
	line = line.replace(",,",",").replace("  ", ",")
	file.write(line + "\n")
browser.quit()
file.close()