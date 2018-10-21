import University from './models/university';
import data from './data.json';

/* const data = [
  { name: 'ETH Zurich',
  country: 'Switzerland',
  city: 'Zurich',
  address: 'Ramistrasse 101',
  cuid: 'cikqgkv4q01ck7453ualdn3hd',
  images: [{
    img: 'https://www.ethz.ch/en/news-and-events/eth-news/news/2018/05/new-professors/_jcr_content/imageCarousel.imageformat.carousel.1899489208.jpg',
    title: 'Picture',
    author: 'Author',
    cols: 2,
  }],
  slug: 'eth-zuerich',
  history: 'Here comes some history',
  departments: [{ name: 'Computer Science', field: 'Informatik' }],
  url: 'https://www.ethz.ch/en.html',
},

];*/

export default function () {
  University.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
/*
    const uni1 = new University({ name: 'ETH Zurich', country: 'Switzerland', city: 'Zurich', cuid: 'cikqgkv4q01ck7453ualdn3hd', img: 'https://www.ethz.ch/en/news-and-events/eth-news/news/2018/05/new-professors/_jcr_content/imageCarousel.imageformat.carousel.1899489208.jpg', slug: 'eth-zuerich' });
    const uni2 = new University({ name: 'Lomonosov MSU', country: 'Russia', city: 'Moscow', cuid: 'cikqgkv4q01ck7453ualdn3hf', img: 'https://cdn2.img.sputniknews.com/images/104355/29/1043552998.jpg', slug: 'lomonosov-msu' });
    const uni3 = new University({ name: 'Agricultural University of Tirana', country: 'Albania', city: 'Tiranë', cuid: 'cikqgkv4q01ck7453ualdn3hk', img: 'https://5.imimg.com/data5/WA/US/MY-18632401/apple-fruit-500x500.jpg', slug: 'agricult-uni-tirana' });
    const uni4 = new University({ name: 'Aleksandër Xhuvani University of Elbasan', country: 'Albania', city: 'Elbasan', cuid: 'cikqgkv4q01ck7453ualdn3hr', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Orange-Whole-%26-Split.jpg/1200px-Orange-Whole-%26-Split.jpg', slug: 'aleksander-xhuvani-elbasan' });
    const uni5 = new University({ name: 'University of Andorra', country: 'Andorra', city: 'Sant Julià de Lòria', cuid: 'cikqgkv4q01ck7453ualdn3hp', img: 'https://onehdwallpaper.com/wp-content/uploads/2016/05/Fresh-Fruit-Banana-HD-Wallpaper.jpg', slug: 'university-andorra' });
*/

    University.collection.insertMany(data, (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
    });
  });
}
