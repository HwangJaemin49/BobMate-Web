import {React, useState, useEffect } from 'react'
import axios from 'axios';


const Content = ({accessToken}) => {

    const [content, setContent] = useState([]);
    const [likedContentIds, setLikedContentIds] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`api/v1/contents/top3?section=1`);
                setContent(response.data.result);
                console.log(response.data);
                const likedResponse = await axios.get(`api/v1/likes/content`, {
                    headers: {
                        Authorization: `${accessToken}`,
                    },
                });

                const likedIds = likedResponse.data.result.map(item => item.contentId);
                setLikedContentIds(likedIds);
            } catch(e) {
                console.log(e);
            }
        }
        fetchData();

    }, [accessToken]);

    const handleLike = async (contentId) => {
        try {
            

            await axios.post(`api/v1/contents/like?contentId=${contentId}`, {}, {
                headers: {
                    Authorization: `${accessToken}`,
                },
            });

            setLikedContentIds([...likedContentIds, contentId]);

            console.log(`Content with ID ${contentId} liked successfully.`);
        } catch(error) {
            console.error('Error liking content:', error);
        }
    };

    const handleUnLike = async (contentId) => {
        try {
            

            await axios.post(`api/v1/contents/unlike?contentId=${contentId}`, {}, {
                headers: {
                    Authorization: `${accessToken}`,
                },
            });

            setLikedContentIds(likedContentIds.filter(id => id !== contentId));

            console.log(`Content with ID ${contentId} unliked successfully.`);
        } catch(error) {
            console.error('Error unliking content:', error);
        }
    };

    const isLiked = (contentId) => likedContentIds.includes(contentId);




    return (
        <div className='content-container' style={{margin: "0px auto", height: "350px", textAlign: "center"}} >
            <div className='first-container' style={{height:"300px"}}>
                {content && content.map((res, index) => (
                    <div className='textTop3' style={{width:"30%", float:"left"}}>
                        <div className='contentTitle' style={{width: "220px", height:'15px', textAlign:'left', display: "flex", alignItems:"center", marginTop: "20px", marginRight: "10px", fontSize: "20px"}}>
                            <span style={{}}>{index+1}. {res.name}</span>
                            <button style={{ color: isLiked(res.contentId) ? 'red' : 'gray', marginLeft: "10px"}} onClick={() => (isLiked(res.contentId) ? handleUnLike(res.contentId) : handleLike(res.contentId))}>♥</button>
                        </div><br/>
                        <div style={{}}>
                            <a href={res.linkUrl} target='_blank' rel="noopener noreferrer"><img src={res.imgUrl} alt="텍스트 컨텐츠 Top3" style={{height:"280px", width:"200px", borderRadius: "30px"}}></img></a>
                        </div>
                        
                    </div>
                    
                    
                ))}
                
            </div>

        </div>
        );
}

export default Content;