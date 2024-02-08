import React, {useState, useEffect } from 'react'
import axios from "axios";


const Menu = ({accessToken}) => {

  const [menu, setMenu] = useState();
  const [likedMenuIds, setLikedMenuIds] = useState([]);
  const SERVER_URI = process.env.REACT_APP_SERVER_URI;

  
  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`${SERVER_URI}/menus`);
              setMenu(response.data.result);
              const likedResponse = await axios.get(`${SERVER_URI}/likes/menu`, {
                    headers: {
                        Authorization: `${accessToken}`,
                    },
                });

                const likedIds = likedResponse.data.result.map(item => item.menuId);
                setLikedMenuIds(likedIds);
                console.log(likedIds);
            } catch(e) {
              console.log(e);
            }
        }
        fetchData();

  }, []);

  const handleLike = async (menuId) => {
    try {
        
        await axios.post(`${SERVER_URI}/menus/like?menuId=${menuId}`, {}, {
            headers: {
                Authorization: `${accessToken}`,
            },
        });

        setLikedMenuIds([...likedMenuIds, menuId]);

        console.log(`Menu with ID ${menuId} liked successfully.`);
    } catch(error) {
        console.error('Error liking menu:', error);
    }
};

const handleUnLike = async (menuId) => {
    try {
        
        await axios.post(`${SERVER_URI}/menus/unlike?menuId=${menuId}`, {}, {
            headers: {
                Authorization: `${accessToken}`,
            },
        });

        setLikedMenuIds(likedMenuIds.filter(id => id !== menuId));

        console.log(`Menu with ID ${menuId} unliked successfully.`);
    } catch(error) {
        console.error('Error unliking Menu:', error);
    }
};

const isLiked = (menuId) => likedMenuIds.includes(menuId);
const menuType = ['아침', '점심', '저녁', '간식/야식'];
  
    return (
        <div className="foodRecomendation" style={{width: "850px", display:"block", margin:"0px auto", height:"800px"}}>
          <div className="firstLine" style={{height: "320px", width: "850px"}}>
            {menu && menu.map((res, index) => (
              <div className="breakfast" style={{float:"left", fontSize:"25px", paddingRight:"15px"}}>
              {menuType[index]}
              <img src={res.imgUrl} className="foodImage" style={{width:"400px", height:"250px", borderRadius: "30px", marginTop:"10px", marginBottom:"10px"}}>
                
              </img>
              <div className="foodDescription" style={{fontSize: "20px"}}>
                {res.name}
                <button style={{ color: isLiked(res.menuId) ? 'red' : 'gray', marginLeft: "10px"}} onClick={() => (isLiked(res.menuId) ? handleUnLike(res.menuId) : handleLike(res.menuId))}>♥</button>
              </div> <br/>
          </div>

            ))}
            
              

        </div>
      </div>
        );
}

export default Menu;