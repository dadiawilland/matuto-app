import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { StyleRoot } from 'radium'
import "react-multi-carousel/lib/styles.css";
import styles from './PriceList.style'
import CommonCard from '../../components/Cards/CommonCard'
import NavCard from '../../components/Cards/NavCard'
import PriceCard from '../../components/Cards/PriceCard'
import NavButton from '../../components/Buttons/NavButton'
import { getPriceListAction } from '../../actions/priceActions';

const PriceList = () => {
    const dispatch = useDispatch();
    const priceList = useSelector((state) => state.price.priceList);
    const selectedPrice = useSelector((state) => state.price.selectedPrice);

    const [isSelected, setisSelected] = useState(false);
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        dispatch(getPriceListAction({}));
    }, []);

    useEffect(() => {
        if (priceList) {
            setPrices(priceList);
        }
    }, [priceList]);

    useEffect(() => {
        console.log(selectedPrice);
    }, [selectedPrice]);

    return (
        <div style={styles().containerPriceList}>
            <div style={styles().containerCardContent}>
                <StyleRoot>
                    <div style={styles().containerCardList}>
                        {prices?.map((price, i) => {
                            return (
                                <PriceCard key={i} price={price}/>
                            );
                        })}
                    </div>
                </StyleRoot>
            </div>
            {/* <ProcessButton isNav={false} btnLabel="Proceed" style={{...styles().containerButton,
                                                                          ...{display: isSelected ? 'flex' : 'flex'}}}/> */}
            <NavButton dest="payment" style={styles().containerButton} />
        </div>
    )
}

export default PriceList