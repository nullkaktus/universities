from lxml import html
import requests

url = 'http://whed.net/results_institutions.php'
page = requests.get('http://whed.net/search_by_region.php?region=Europe')
#countries = ["Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy"]
countries = ["Albania", "Andorra"]

f = open('helloworld.txt','w')

for country in countries:
    form_data = {
        'Chp1': country,
        'afftri': 'InstNameEnglish,iBranchName',
        'submit': 'submit',
        'nbr_ref_pge': '400'
    }
    response = requests.post(url, data=form_data)
    tree = html.document_fromstring(response.content)

    #printing to a file if necessary
    #https://stackoverflow.com/questions/5512811/builtins-typeerror-must-be-str-not-bytes
    #f = open('helloworld.txt','wb')
    #f.write(response.content)
    #f.close()

    #print response.content

    #tree = html.fromstring(page.content)
    #This will create a list of buyers:
    #buyers = tree.find_class('detail')
    
    #searches for the exact class name
    for elem in tree.xpath('//p[@class="tools fright"]/a/@href'):
        details = requests.get('http://whed.net/' + elem)
        print(details)
        details_tree = html.document_fromstring(details.content)
        name = details_tree.xpath('//section[@id="contenu"]/h2/text()')
        town = details_tree.xpath('//div[@class="dd"]/p/span/text()')
        link = details_tree.xpath('//div[@class="dd"]/span[@class="contenu"]/a/text()')
        f.write(name[0].rstrip() + ',' +country + ',' + link[0].rstrip() + ',' + town[3].rstrip() + '\n')
        #f.write(town[1].rstrip() + '\n')
    print('Done' + country)

f.close()
print('Done all')

#unis = tree.xpath('//a[@class="detail fancybox fancybox.iframe"]/@href')

#print ('Buyers: ', buyers)
#print ('Unis: ', unis)