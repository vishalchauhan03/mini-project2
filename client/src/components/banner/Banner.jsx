
import { Box, Typography, styled } from '@mui/material';

const Image = styled(Box)`
    background: url(https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg) center/80%;
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-weight: 2
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: #FFFFFF;
`;

const Banner = () =>{
    return(
        <Image>
            <Heading>Oden Blog</Heading>
            <SubHeading>Explore the World with us, You're not alone. Learn from other leaders that are serving in the trenches.</SubHeading>
        </Image>
    )
}

export default Banner;