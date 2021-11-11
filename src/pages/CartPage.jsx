import { connect } from 'react-redux';
import { Cart, EmptyCart } from '../components'


function CartPage( {entriesCount} ) {
  const content = () => {
    if (entriesCount) {
      return <Cart />;
    } else {
      return (
        <div className="App__empty-cart-wrapper">
          <EmptyCart />
        </div>
      );
    }
  }
  return (
    <div className="App__wrapper">
      <section className="App__cart-section">
        {content()}
      </section>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    entriesCount: state.cart.entriesCount
  }
}

export default connect(mapStateToProps)(CartPage);