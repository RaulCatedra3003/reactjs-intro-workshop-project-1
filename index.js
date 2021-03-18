const e = React.createElement;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { src, name, paragraph } = this.props;
    return e('div', { className: 'card' }, [
      e('img', { key: `${name}img`, src, className: 'card-img' }),
      e('h2', { key: `${name}h2`, className: 'card-title' }, name),
      e('p', { key: `${name}p`, className: 'card-paragraph' }, paragraph),
      e(
        'button',
        {
          key: `${name}button`,
          onClick: () => {
            alert('iepaaaa!');
          },
        },
        'Read More',
      ),
    ]);
  }
}

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { elements } = this.props;
    const fragment = elements.map((el, index) => {
      return e(Card, {
        key: index,
        src: el.src,
        name: el.name,
        paragraph: el.paragraph,
      });
    });
    return e('div', { className: 'card-list' }, fragment);
  }
}

const elements = [
  {
    src: './assets/demo1.png',
    name: 'scathcer',
    paragraph:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae temporibus tempore iusto explicabo repellat odio doloribus nulla suscipit, facere voluptatem aspernatur molestiae libero vel quis! Quis libero voluptatibus harum dolorem!',
  },
  {
    src: './assets/demo2.jpg',
    name: 'cabalistically',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus totam, vitae a rem facere sequi repudiandae voluptatem maxime provident corrupti, dolorem natus nulla, ducimus laudantium laboriosam vero obcaecati facilis quasi.',
  },
  {
    src: './assets/demo3.jpg',
    name: 'jorganium',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ut assumenda eos ipsum dolores, maiores, ea delectus adipisci, cum odio nihil qui? Sunt, veniam minus reiciendis expedita odit facere? Sint!',
  },
];

ReactDOM.render(e(CardList, { elements }), document.getElementById('root'));
