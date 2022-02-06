import {
  INCREMENT,
  DECREMENT,
  REMOVE_PRODUCT,
  COUNT_TOTAL,
} from '../actions/types';

const products = {
  currency: '€',
  shipping: 15,
  items: [
    {
      id: '1',
      product_name: 'T-shirt',
      image: 'https://picsum.photos/150/225?random=1',
      qty: 2,
      price: {
        old_price: 99.95,
        current_price: 59.95,
      },
      product_options: [
        {
          id: 'size',
          name: 'Size',
          value: 'M',
        },
        {
          id: 'color',
          name: 'Color',
          value: 'Red',
        },
        {
          id: 'pattern',
          name: 'Pattern',
          value: 'Floral',
        },
      ],
    },
    {
      id: '2',
      product_name: 'Dress',
      image: 'https://picsum.photos/200/200?random=1',
      qty: 1,
      price: {
        current_price: 80.55,
      },
      product_options: [
        {
          id: 'size',
          name: 'Size',
          value: 'L',
        },
      ],
    },
    {
      id: '3',
      product_name: 'Backpack',
      image: 'https://picsum.photos/250/175?random=1',
      qty: 1,
      price: {
        old_price: 150.95,
        current_price: 120.5,
      },
      product_options: [],
    },
    {
      id: '4',
      product_name: 'Backpack XL',
      image: 'https://picsum.photos/250/150?random=1',
      qty: 1,
      price: {
        current_price: 160.5,
      },
      product_options: [],
    },
  ],
  products: {},
  total: [],
};

const initalState = products;

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        products: [
          ...state.items,
          state.items.map((item) =>
            item.id === action.payload ? (item.qty += 1) : ''
          ),
        ],
      };
    case DECREMENT:
      return {
        ...state,
        products: [
          ...state.items,
          state.items.map((item) =>
            item.id === action.payload ? (item.qty -= 1) : ''
          ),
        ],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case COUNT_TOTAL:
      return {
        ...state,
        total:
          state.items
            .map((item) => item.price.current_price * item.qty)
            .reduce((accumulator, current) => {
              return accumulator + current;
            }, 0) + state.shipping,
      };
    default:
      return state;
  }
};
