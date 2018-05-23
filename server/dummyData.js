import University from './models/university';
import fs from 'fs';


export default function () {
  University.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const uni1 = new University({ name: 'ETH Zurich', country: 'Switzerland', city: 'Zurich', cuid: 'cikqgkv4q01ck7453ualdn3hd', img: 'https://www.ethz.ch/en/news-and-events/eth-news/news/2018/05/new-professors/_jcr_content/imageCarousel.imageformat.carousel.1899489208.jpg', slug: 'eth-zuerich' });
    const uni2 = new University({ name: 'Lomonosov MSU', country: 'Russia', city: 'Moscow', cuid: 'cikqgkv4q01ck7453ualdn3hf', img: 'https://cdn2.img.sputniknews.com/images/104355/29/1043552998.jpg', slug: 'lomonosov-msu' });

    University.create([uni1, uni2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
