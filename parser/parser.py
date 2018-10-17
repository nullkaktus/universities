from lxml import html
import requests

url = 'https://whed.net/results_institutions.php'
page = requests.get('http://whed.net/search_by_region.php?region=Europe')
#countries_europe = ["Armenia"]
countries_europe = ["Albania", "Andorra", "Armenia", "Austria", "Belarus", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia", "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy",
 "Latvia", "Lithuania", "Malta", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland", "Portugal", "Romania", "Russian Federation", "San Marino", "Serbia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom"]

#countries_america = ["Canada", "Mexico", "United States of America", "Argentina", "Aruba", "Bahamas", "Barbados", "Brazil", "Chile", "Colombia", "Cuba", "Ecuador", "Grenada", "Guatemala", "Honduras", "Jamaica", "Nicaragua", "Panama", "Paraguay", "Peru", "Uruguay"]
#countries_africa = ["Algeria", "Angola", "Benin", "Botswana", "Burundi", "Cameroon"]

#countries = ["Albania", "Andorra"]

f = open('helloworld.txt','w', encoding="utf-8")

for country in countries_europe:
    form_data = {
        'Chp1': country,
        'afftri': 'InstNameEnglish,iBranchName',
        'submit': 'submit',
        'nbr_ref_pge': '400'
    }
    response = requests.post(url, data=form_data)
    #temp = open('hello.txt','w')
    tree = html.document_fromstring(response.content)
    #temp.write(response.content.decode("utf-8"))
    #temp.close()

    #printing to a file if necessary
    #https://stackoverflow.com/questions/5512811/builtins-typeerror-must-be-str-not-bytes
    #f = open('helloworld.txt','wb')
    #f.write(response.content)
    #f.close()

    #print response.content

    #tree = html.fromstring(page.content)
    #This will create a list of buyers:
    #buyers = tree.find_class('detail')
    #print(tree.xpath('//p[@class="tools fright"]/a/@href'))
    #searches for the exact class name
    for elem in tree.xpath('//p[@class="tools fright"]/a/@href'):
        try:
            details = requests.get('http://whed.net/' + elem)
            details_tree = html.document_fromstring(details.content)
            name = details_tree.xpath('//section[@id="contenu"]/h2/text()')
            native_name = details_tree.xpath('//section[@id="contenu"]/h2/span/text()')
            #print(native_name)
            #town = details_tree.xpath('//div[@class="dd"]/p/span/text()')
            if details_tree.xpath('//span[text()="City:"]/following::span[1]/text()') is not None:
                town = details_tree.xpath('//span[text()="City:"]/following::span[1]/text()')[0].strip()
            else:
                town = ""
            if details_tree.xpath('//*[@id="contenu"]/div[3]/div/p/text()') is not None:
                history = details_tree.xpath('//*[@id="contenu"]/div[3]/div/p/text()')[0].strip()
            else:
                history=""
		    #not so flexible option
            #departments = details_tree.xpath('//*[@id="contenu"]/div[10]/div/p[@class="principal"]/text()');
            departments = details_tree.xpath('//h3[text()=" Divisions"]/following::div[1]/div/p[@class="principal"]/text()')
            street = details_tree.xpath('//span[text()="Street:"]/following::span[1]/text()')[0].strip()
            #print(street)
            if not details_tree.xpath('//span[@class="contenu"]/a[@class="lien"]/text()'):
                link = ""
            else:
                link = details_tree.xpath('//span[@class="contenu"]/a[@class="lien"]/text()')[0].rstrip()
            if len(town) < 4 :
                print('No town: ' + name[0].rstrip() + '\n' )
                town = ""
            if len(link) < 1 :
                print('No link: ' + name[0].rstrip() + '\n')
                link = ""
            f.write(name[0].rstrip() + ';' +native_name[0].strip() + ';'+ link + ';' + history + ';' + town + ';' + street + ';' + country +'\n')
        except Exception:
            pass
        #f.write(town[1].rstrip() + '\n')
    print('Done' + country + '\n', flush=True)
    f.flush()

f.close()
print('Done all')

#unis = tree.xpath('//a[@class="detail fancybox fancybox.iframe"]/@href')

#print ('Buyers: ', buyers)
#print ('Unis: ', unis)