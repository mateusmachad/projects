import Cardimg1 from '../images/imgcard1.png'
import Cardimg2 from '../images/imgcard3.png'
import Cardimg3 from '../images/imgcard2.png'
import star from '../images/star.png'

export default [
    {
        id:1,
        title:"Lições de vida com Katie Zaferes",
        description:"kakkaka",
        price:136,
        starImg: star,
        coverImg:Cardimg1,
        stats:
            {
            rating:5.0,
            reviewCount:6
            },
            country: "USA",
        openSpots: 0,
        location:"Indisponível"
    },
    {   
        id:2,
        title:"Aprenda fotografia para casamentos",
        description:"sras",
        price:125,
        starImg: star,
        coverImg: Cardimg2,
        stats:{
            rating:5.0,
            reviewCount:27,
        },
        country:"USA",
        openSpots:"(17)",
        location:"Disponível"
    },
    {
        id:3,
        title:"Grupo de Mountain Bike",
        description:"aeeaeae",
        price:50,
        starImg: star,
        coverImg:Cardimg3,
        stats: {
            rating: 4.8 ,
            reviewCount:30
        },
        country:"USA",
        openSpots:"(34)",
        location:"Disponível"
    }
]