const testPosts = [
  {
    id: '0',
    title: 'Title Test #0',
    image: 'https://i.pinimg.com/736x/f4/87/86/f48786eff1e1496b53c252795f15895c.jpg',
    updated: 'Feb 8 10:52 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? Accusantium quod ab exercitationem, eveniet molestiae distinctio illo. Vel ipsum voluptates veritatis recusandae quas dolorum, optio quidem iusto, provident, explicabo blanditiis animi doloribus. Architecto sed esse magni quam laudantium, repellendus adipisci facilis similique qui, iste quod, reiciendis vel!',
  },
  {
    id: '1',
    title: 'Title Test #1',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
  {
    id: '2',
    title: 'Title Test #2',
    image: 'https://i.imgur.com/KbFa5Sf.jpg',
    updated: 'Feb 2 11:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? Accusantium quod ab exercitationem, eveniet molestiae distinctio illo. Vel ipsum voluptates veritatis recusandae quas dolorum, optio quidem iusto, provident, explicabo blanditiis animi doloribus. Architecto sed esse magni quam laudantium, repellendus adipisci facilis similique qui, iste quod, reiciendis vel!',
  },
  {
    id: '3',
    title: 'Title Test #3',
    image: 'https://i.imgur.com/KbFa5Sf.jpg',
    updated: 'Feb 2 11:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? Accusantium quod ab exercitationem, eveniet molestiae distinctio illo. Vel ipsum voluptates veritatis recusandae quas dolorum, optio quidem iusto, provident, explicabo blanditiis animi doloribus. Architecto sed esse magni quam laudantium, repellendus adipisci facilis similique qui, iste quod, reiciendis vel!',
  },
  {
    id: '4',
    title: 'Title Test #4',
    image: 'https://i.imgur.com/KbFa5Sf.jpg',
    updated: 'Feb 1 11:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? Accusantium quod ab exercitationem, eveniet molestiae distinctio illo. Vel ipsum voluptates veritatis recusandae quas dolorum, optio quidem iusto, provident, explicabo blanditiis animi doloribus. Architecto sed esse magni quam laudantium, repellendus adipisci facilis similique qui, iste quod, reiciendis vel!',
  },
  {
    id: '5',
    title: 'Title Test #5',
    image: 'https://i.imgur.com/KbFa5Sf.jpg',
    updated: 'Feb 1 09:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? Accusantium quod ab exercitationem, eveniet molestiae distinctio illo. Vel ipsum voluptates veritatis recusandae quas dolorum, optio quidem iusto, provident, explicabo blanditiis animi doloribus. Architecto sed esse magni quam laudantium, repellendus adipisci facilis similique qui, iste quod, reiciendis vel!',
  },
  {
    id: '6',
    title: 'Title Test #6',
    image: 'https://i.imgur.com/KbFa5Sf.jpg',
    updated: 'Feb 1 05:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? Accusantium quod ab exercitationem, eveniet molestiae distinctio illo. Vel ipsum voluptates veritatis recusandae quas dolorum, optio quidem iusto, provident, explicabo blanditiis animi doloribus. Architecto sed esse magni quam laudantium, repellendus adipisci facilis similique qui, iste quod, reiciendis vel!',
  },
  {
    id: '7',
    title: 'Title Test #7',
    image: 'https://i.imgur.com/KbFa5Sf.jpg',
    updated: 'Feb 1 02:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? Accusantium quod ab exercitationem, eveniet molestiae distinctio illo. Vel ipsum voluptates veritatis recusandae quas dolorum, optio quidem iusto, provident, explicabo blanditiis animi doloribus. Architecto sed esse magni quam laudantium, repellendus adipisci facilis similique qui, iste quod, reiciendis vel!',
  },
  {
    id: '8',
    title: 'Title Test #1',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
  {
    id: '9',
    title: 'Title Test #1',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
  {
    id: '10',
    title: 'Title Test #1',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
  {
    id: '11',
    title: 'Title Test #1',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
  {
    id: '12',
    title: 'Title Test #1',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
  {
    id: '13',
    title: 'Title Test #1',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
  {
    id: '14',
    title: 'Title Test #111',
    updated: 'Feb 4 7:11 PM',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nostrum illum odio sit expedita! Amet nobis praesentium ratione mollitia eos odio quibusdam enim possimus vel, molestias ut facere nihil dolores? Eum cumque eveniet inventore, rerum quo vero. Enim, ipsam mollitia commodi eveniet eos ipsa aut eligendi nobis architecto ad. Cumque, natus ab? ',
  },
];

export class API {
  static pageSize = 5;
  static pageCount = testPosts.length / this.pageSize;

  static async getBlogPosts(limit = 1) {
    let getServerResponse = new Promise((resolve, _) => {
      setTimeout(() => resolve(testPosts.slice(0, limit * this.pageSize)), 300);
    });

    return await getServerResponse;
  }
}
