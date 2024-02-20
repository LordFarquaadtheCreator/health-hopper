from selenium import webdriver

# Create a new instance of the Firefox driver
driver = webdriver.Firefox()

# Goto website
website = r"https://www.google.com/maps/place/Magic+Smile+Turkey/@36.8566468,30.7806438,17z/data=!3m1!4b1!4m6!3m5!1s0x14c39bd50dbec82f:0x2d1bffc12eae1ed4!8m2!3d36.8566425!4d30.7832187!16s%2Fg%2F11h7c_91s_?authuser=2&entry=ttu"
driver.get(website)
xpath = r"/html/body/div[1]/div[3]/div[8]/div[9]/div/div/div[1]/div[2]/div/div[1]/div/div/div[2]/div/div[1]"

try:
    title = driver.find_element(by="xpath", value=xpath)
    if (title):
        print("Element found")
        title.click()
    else:
        driver.execute_script("arguments[0].scrollIntoView();", title)
        driver.quit()
except:
    print("Element not found")
    driver.quit()




# Close the browser
driver.quit()

# if __name__ == "__main__":
#     print("hello")