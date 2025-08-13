export default function handler(req, res) {
  const type = req.query.type;
  const data = {
    india: [
      {
        title: 'Goa, India',
        image: '/images/image.png',
        price: '2,999',
      },
          {
        title: 'Kashmir, India',
        image: '/images/image (1).png',
        price: '4,400',
      },
      {
        title: 'Andaman, India',
        image: '/images/image.png',
        price: '4,400',
      },
      {
        title: 'The Amazon',
        image: '/images/amazon.jpg',
        price: '4,400',
      },
      {
        title: 'Andaman, India',
        image: '/images/image.png',
        price: '4,400',
      },
           {
        title: 'Kashmir, India',
        image: '/images/image (1).png',
        price: '4,400',
      },

      // Add more Indian locations...
    ],
    international: [
      {
        title: 'The Azores, Portugal',
        image: '/images/image (1).png',
        price: '4,400',
      },
      {
        title: 'New Zealand',
        image: '/images/image.png',
        price: '4,400',
      },
      {
        title: 'The Amazon',
        image: '/images/amazon.jpg',
        price: '4,400',
      },
      {
        title: 'Venezuela',
        image: '/images/venezuela.jpg',
        price: '4,400',
      },
      {
        title: 'China',
        image: '/images/china.jpg',
        price: '4,400',
      },
    ],
  };

  res.status(200).json(data[type] || []);
}
