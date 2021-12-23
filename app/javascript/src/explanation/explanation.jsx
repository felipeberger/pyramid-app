import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Explanation () {

    const imageWidth = '80%';

    return (
        <Container maxWidth="xl" sx={{my:2}}>

            <Typography align='left' variant="h5" my={2}>
                What is the pyramid principle?
            </Typography>

            <Typography align='left' paragraph>
                The pyramid principle was developed by Barbara Minto, a former McKinsey consultant. The pyramid principle makes it easy to organize and structure business presentations and documents by putting the conclusion at the center of your argument and constructing the rest of the narrative so it strongly and sharply supports that conclusion. 
            </Typography>

            <Typography align='left' paragraph>
                The pyramid principle - as it's name suggests - requires that we structure our arguments and supporting data in a pyramid format. At the top of the pyramid sits the background information that frames the issue we are dealing with and the answer or main argument we are presenting as the solution to the issue the client is facing, collectively known as SCQA (Situation, Complication, Question, Answer). Below the answer sit supporting arguments and insights, each backed-up by data and analysis.
            </Typography>

            <Box component="div" sx={{my:3}}>
                <img src="https://pyramid-app.s3.ap-southeast-2.amazonaws.com/Pyramid+SCQA.svg" alt="alt" width={imageWidth} style={{display: 'block',marginLeft: 'auto', marginRight: 'auto' }} />
            </Box>

            <Typography align='left' paragraph>
                Each supporting insight must be MECE (Mutually Exclusive, Collectively Exhaustive), meaning that each insight must independently support the conclusion without any overlap across insights (mutually exclusive) but they also cover all reasonable angles for why we came up with our conclusion (collectively exhaustive). You should be able to read insights out of order without impacting the strength of each insight.
            </Typography>

            <Typography align='left' paragraph>
                Each insight can be understood as a summary of the supporting data and analysis found on the bottom level of the pyramid. With this in mind, each set of supporting information must logically flow together to conclude with the insight and leave no holes in the reasoning that might weaken the strenght of the insight. Keep in mind that we are not limited to only 3 pieces of supporting data or analysis, we can use as much data as required as long as no gaps remain in our arguments.
            </Typography>

            <Typography align='left' paragraph>
                While it is best practice for this level of the pyramid to also satisfy the MECE criteria, it is more important that all the data is collectively exhaustive without necessarily being mutually exclusive. It is acceptable for the information not to be mutually exclusive here as long as it tells a convincing story and supports the insight on the level above.   
            </Typography>

            <Typography align='left' variant="h5" my={2}>
                The pyramid principle in action
            </Typography>

            <Typography align='left' paragraph>
                Besides providing a useful framework to place arguments and insights in a logical order, one of the main benefits of the pyramid principle is that it forces us to think clearly about the arguments we are making and how they fit together to support our conclusion.  
            </Typography>

            <Typography align='left' paragraph>
                The result of structuring our auguments in the pyramid structure should provide us with an overview of the solution being proposed, why that is the right solution, and how that solution fits within the problem that the client is currently facing. For example, if we are presented with a client who is in the used car business and has seen a steady decline in their business over the last couple years, our arguments and insights structured as a pyramid could look as follows: 
            </Typography>

            <Box component="div" sx={{my:3}}>
                <img src="https://pyramid-app.s3.ap-southeast-2.amazonaws.com/Pyramid2.svg" alt="alt" width={imageWidth} style={{display: 'block',marginLeft: 'auto', marginRight: 'auto' }} />
            </Box>

            <Typography align='left' paragraph>
                Once we have created the above structrure and we are confident about our answer and supporting arguments, we can easily translate the structrure into a presentation slide deck by starting from the top to the bottom of the pyramid, as long as the supporting data and analysis follow each insight. At this point, it is also a good test of how MECE the insights are by placing the insights in several different orders and see if the narrative remains equally strong. If the insights are MECE then the order they are placed in should not have an impact on the overall strength of the arguments. 
            </Typography>

            <Box component="div" sx={{my:3}}>
                <img src="https://pyramid-app.s3.ap-southeast-2.amazonaws.com/slides.svg" alt="alt" width={imageWidth} style={{display: 'block',marginLeft: 'auto', marginRight: 'auto' }} />
            </Box>

        </Container>
    )
}