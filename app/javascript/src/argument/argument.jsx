import React, {useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import BarChartIcon from '@mui/icons-material/BarChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import PieChartIcon from '@mui/icons-material/PieChart';

export default function Argument () {
    const [chartType, setChartType] = useState('barChart')
    const iconSize = '50px'

    const dummyData = {argument:'Wages for most common jobs have not increased in line with inflation, while the price for used cars has tracked inflation over the same time period',explanation: 'Used cars used to be the accessible option for workers in lower wage positions, but the cost of purchase is now out of reach for many workers who might have considered buying one in the past',insight:1 ,data:{'title': 'Cost of used car as proportion of average monthly wages', 'rows': [['Year', '2010', '2011', '2012', '2013'],['wages','2000','2000','2050','2050'], ['purchase cost', '4000', '4300', '4500', '5000']] }}

    const numberOfColumns = dummyData.data['rows'][0].length
    const numberOfBlankRows = 10
 
    const createHeaders = (numberOfHeaders) => {
        const alpha = Array.from(Array(26)).map((index, i) => i + 65);
        const alphabet = alpha.map((int) => String.fromCharCode(int));
        
        const headers= []

        for (let i=0; i < numberOfHeaders; i++) {
            headers.push(alphabet[i])
        }

        return headers.map( (value, int) => {
            return {field: `col${int}`, headerName: `${value}`, headerClassName: 'staticHeader', width: 125, editable: true, headerAlign: 'center', sortable: false}
        })
    }

    const createRows = (rowsData) => {

        return rowsData.map( (row, int) => {
            const tempRow = {id: int}

            for (let i = 0; i < numberOfColumns; i++) {

                tempRow[`col${i}`] = row[i]
            }

            return tempRow
        })
    }

    const addEmptyRows = (dataRows) => {
        let startIndex = dataRows.length - 1
        for (let i = startIndex; i < startIndex + numberOfBlankRows; i++ ) {
            dataRows.push( {id: i + 1} )
        }

        return dataRows
    }

    const handleChartButton = (e, newSelection) => {
        setChartType(newSelection)
    }

    return (
        <>
        <Grid
            container
            item
            direction='column'
            alignContent='center' 
            justify='center'
        >
            <Grid
                item
                width='90%'
                py={2}
            >
                <TextField 
                    fullWidth 
                    label="Argument" 
                    id="argument"
                    margin="normal"
                    defaultValue={dummyData.argument}
                    // onChange={textChangeHandler}
                    multiline
                    // rows={inputHeightForSituationComplicationQuestionAnswer}
                />

                <TextField 
                    fullWidth 
                    label="Explanation" 
                    id="explanation"
                    margin="normal"
                    defaultValue={dummyData.explanation}
                    // onChange={textChangeHandler}
                    multiline
                    // rows={inputHeightForSituationComplicationQuestionAnswer}
                />

                <Typography variant="h5" mt={2}>
                    Suppoting Data
                </Typography>
                
                <TextField 
                    fullWidth 
                    label="Chart Title" 
                    id="title"
                    margin="normal"
                    defaultValue={dummyData.data['title']}
                    // onChange={textChangeHandler}
                    multiline
                    // rows={inputHeightForSituationComplicationQuestionAnswer}
                />
                <Grid
                    container
                    item
                    direction='column'
                    align='center'
                >
                    <Grid
                        item
                        display="flex-end"
                        justify="center"
                        my={2}
                    >
                        <Typography pb={1}>
                            Select Chart Type:
                        </Typography>
                        <ToggleButtonGroup
                            exclusive
                            value={chartType}
                            onChange={handleChartButton}
                        >
                            <ToggleButton value='barChart'>
                                <Tooltip title='Bar Chart'>
                                    <BarChartIcon sx={{height:iconSize, width: iconSize}} />
                                </Tooltip>
                            </ToggleButton>
                            
                            <ToggleButton value='lineChart'>
                                <Tooltip  title='Line Chart'>
                                    <TimelineIcon sx={{height:iconSize, width: iconSize}} />
                                </Tooltip>
                            </ToggleButton>

                            <ToggleButton value='pieChart'>
                                <Tooltip  title='Pie Chart'>
                                    <PieChartIcon sx={{height:iconSize, width: iconSize}} />
                                </Tooltip>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>

                </Grid>
                <Box
                    height={500}
                    width='100%'
                    sx={{'& .staticHeader': {backgroundColor: 'rgba(220,220,220,0.5)'}}}
                >
                    {/* TODO columns must be editable, figure out why they are not letting user edit them */}
                    <DataGrid
                        rows={addEmptyRows(createRows(dummyData.data['rows']))}
                        columns={createHeaders(10)}
                        aria-label='Data Table'
                        hideFooter
                        showColumnRightBorder
                        showCellRightBorder
                        disableColumnFilter	
                        disableColumnMenu	
                        disableDensitySelector
                    />
                </Box>

            </Grid>
        </Grid>
        </>
    )
}