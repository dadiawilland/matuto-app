import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './Payment.style';
import PriceCard from '../../components/Cards/PriceCard';
import PaymentInfo from '../OnBoarding/PaymentInfo';
import { useHistory } from 'react-router-dom';

const Payment = () => {
  const history = useHistory();
  const [isSelected, setisSelected] = useState(false);
  const selectedPrice = useSelector((state) => state.price.selectedPrice);

  useEffect(() => {
    if (!selectedPrice.id) {
      history.push('/pricing');
    }
  }, [selectedPrice]);

  return (
    <div style={styles().containerPayment}>
      <div style={styles().containerLeft}>
        <PriceCard price={selectedPrice} isAlwaysActive={true} />
      </div>
      <div style={styles().containerRight}>
        <PaymentInfo
          style={{ marginTop: 0, alignSelf: 'center' }}
          title={'Bank Details'}
          amount={selectedPrice.price}
          isRegistration={false}
        />
      </div>
    </div>
  );
};

export default Payment;
