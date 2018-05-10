import University from './models/university';


export default function () {
  University.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    const uni1 = new University({ name: 'ETH Zurich', country: 'Switzerland', city: 'Zurich', cuid: 'cikqgkv4q01ck7453ualdn3hd' });
    const uni2 = new University({ name: 'Lomonosov MSU', country: 'Russia', city: 'Moscow', cuid: 'cikqgkv4q01ck7453ualdn3hf' });

    University.create([uni1, uni2], (error) => {
      if (!error) {
        // console.log('ready to go....');
      }
    });
  });
}
