from lxml import html
import requests

url = 'http://whed.net/results_institutions.php'
page = requests.get('http://whed.net/search_by_region.php?region=Europe')
form_data = {
        'Chp1': 'Albania',
        'afftri': 'InstNameEnglish,iBranchName',
        'submit': 'submit',
    }

response = requests.post(url, data=form_data)
tree = html.document_fromstring(response.content)

#printing to a file if necessary
#f = open('helloworld.txt','w')
#f.write(response.content)
#f.close()

#print response.content

#tree = html.fromstring(page.content)

#This will create a list of buyers:
#buyers = tree.xpath('//a[@title="Europe"]/href()')
#This will create a list of prices
unis = tree.xpath('//[@class="i_name"]/text()')

#print 'Buyers: ', buyers
print 'Unis: ', unis