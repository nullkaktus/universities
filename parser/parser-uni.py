from lxml import html
import requests

url = 'http://whed.net/results_institutions.php'
page = requests.get('http://whed.net/search_by_region.php?region=Europe')
countries_europe = ["Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy",
 "Latvia", "Lithuania", "Malta", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russian Federation", "San Marino", "Serbia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom"]

#countries_america = ["Canada", "Mexico", "United States of America", "Argentina", "Aruba", "Bahamas", "Barbados", "Brazil", "Chile", "Colombia", "Cuba", "Ecuador", "Grenada", "Guatemala", "Honduras", "Jamaica", "Nicaragua", "Panama", "Paraguay", "Peru", "Uruguay"]
#countries_africa = ["Algeria", "Angola", "Benin", "Botswana", "Burundi", "Cameroon"]

#countries = ["Albania", "Andorra"]

f = open('helloworld.txt','w')

for country in countries_europe:
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
        #print(details)
        details_tree = html.document_fromstring(details.content)
        name = details_tree.xpath('//section[@id="contenu"]/h2/text()')
        town = details_tree.xpath('//div[@class="dd"]/p/span/text()')
        link = details_tree.xpath('//span[@class="contenu"]/a[@class="lien"]/text()')
        if len(town) < 4 :
            print('Error town' + name[0].rstrip())
            continue
        if len(link) < 1 :
            print('Error link' + name[0].rstrip())
            continue
        f.write(name[0].rstrip() + ',' +country + ',' + link[0].rstrip() + ',' + town[3].rstrip() + '\n')
        #f.write(town[1].rstrip() + '\n')
    print('Done' + country)

f.close()
print('Done all')

#unis = tree.xpath('//a[@class="detail fancybox fancybox.iframe"]/@href')

#print ('Buyers: ', buyers)
#print ('Unis: ', unis)