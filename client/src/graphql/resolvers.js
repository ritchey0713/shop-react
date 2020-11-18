import { gql } from "apollo-boost";
import { addItemToCart } from "./cart.utils";

// entend to eisting type of mutation on backend (graphql server)
// type definitions must be capitalized
export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
  }
`;

// @client tells apollo to look on front end cache (state) for data
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

// root = parent for a item, a collection is the root
// args = args passed in to the resolver
// context = things apollo has access to
// info = info about query or mutation
export const resolvers = {
  Mutation: {
    toggleCartHidden: (_root, _args, _context, _info) => {
      const data = _context.cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      _context.cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !data.cartHidden },
      });
      return !data.cartHidden;
    },
    AddItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      console.log(cartItems);
      const newCartItems = addItemToCart(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems },
      });
      console.log(newCartItems);
      return newCartItems;
    },
  },
};