import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        console.log(snapshot);
        snapshot.docs.map((doc) => {
          console.log(doc.data());
        });
        const products = snapshot.docs.map((doc) => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({
          products: products,
        });
      });
  }

  handleIncreaseQuantity = (product) => {
    console.log("Increase qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty += 1;

    // this.setState({
    //   products: products,
    // });

    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("Update Success");
      })
      .catch(() => {
        console.log("Update failed");
      });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Decrease qty of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    // products[index].qty -= 1;

    // this.setState({
    //   products: products,
    // });
    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty - 1,
      })
      .then(() => {
        console.log("Update Success");
      })
      .catch(() => {
        console.log("Update failed");
      });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  handleDeleteQuantity = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);
    // this.setState({
    //   products: items,
    // });
    const docRef = firebase
      .firestore()
      .collection("products")
      .doc(id);
      docRef
        .delete()
        .then(() => {
          console.log("Update Success");
        })
        .catch(() => {
          console.log("Update failed");
        });
  };
  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price;
      return "";
    });
    return cartTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteQuantity}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          {" "}
          Total : {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
