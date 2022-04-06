import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";


// export default function Stars(props) {

//     const totalStars = 5;
//     const activeStars = 3;

//     return (
//         <Box>
//             {[...new Array(totalStars)].map((arr, index) => {
//                 return index < activeStars ? <StarIcon /> : <StarBorderIcon />;
//             })}
//         </Box>
//     )
// }

export default function Stars(props) {
    const rate = Math.abs(props.rate)

    const totalStars = 5
    let fullStars = Math.floor(rate)
    let halfStars = rate - fullStars >= 0.5 ? 1 : 0
    let emptyStars = totalStars - fullStars - halfStars

    return (
        <Box>
            {[...new Array(totalStars)].map((arr, index) => {
                return index < fullStars ? <StarIcon /> : <StarBorderIcon />;
            })}
        </Box>
            
    )
}

