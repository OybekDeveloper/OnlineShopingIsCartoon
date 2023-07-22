import React ,{useState , useEffect} from 'react';
import '../App.css';
import Loader from './Loader';
import {API_KEY,API_URL} from '../config';
import GoodList from './GoodList';

export default function Shop() {

    const [goods,setGoods]=useState([]);
    const [loader, SetLoader]=useState(true);

    useEffect(()=>{
        fetch(API_URL, {
            headers:{
                Authorization:API_KEY,
            }
        })
        .then(response=>response.json())
        .then((data)=>{
            data.featured && setGoods(data.featured);
            SetLoader(false);
        })
    },[])

    return (
        <div className="content container">
            {loader?<Loader/>:<GoodList goods={goods}/>}
        </div>
    )
}
