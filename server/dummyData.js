import University from './models/university';
import fs from 'fs';


export default function () {
  University.count().exec((err, count) => {
    if (count > 0) {
      return;
    }
    const imgPath1 = './images/eth-zurich.jpg';
    const imgPath2 = './images/Moscow_State_University.jpg';

    const uni1 = new University({ name: 'ETH Zurich', country: 'Switzerland', city: 'Zurich', cuid: 'cikqgkv4q01ck7453ualdn3hd' });
    const uni2 = new University({ name: 'Lomonosov MSU', country: 'Russia', city: 'Moscow', cuid: 'cikqgkv4q01ck7453ualdn3hf' });
    uni1.img.data = fs.readFileSync(imgPath1);
    uni1.img.data = fs.readFileSync(imgPath2);

    uni1.img.contentType = 'image/png';
    uni2.img.contentType = 'image/png';

    University.create([uni1, uni2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
