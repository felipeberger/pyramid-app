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
import { LineChart,BarChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip as chartTooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Argument () {
    const [chartType, setChartType] = useState('barChart')
    const iconSize = '50px'

    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

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

    const filterHeaderRow = (rowsData) => {
        return rowsData.filter( (row,index) => {
            if (index === 0) return false
            return row
        })
    }

    const formatTableData = () => {
        const tableData = []

        // const trialData = ['Year', '2010', '2011', '2012', '2013']

        const trialData = [['Year', '2010', '2011', '2012', '2013'], ['wages','2000','2000','2050','2050'], ['purchase cost', '4000', '4300', '4500', '5000']]

        // [['Year', '2010', '2011', '2012', '2013'], ['wages','2000','2000','2050','2050'], ['purchase cost', '4000', '4300', '4500', '5000']]
        
        // [{'Year' : '2010', 'wages' : '2000', 'purchase cost' : '4000'}, {'Year' : '2011', 'wages' : '2000', 'purchase cost' : '4300'}, {'Year' : '2012', 'wages' : '2050', 'purchase cost' : '4500'}, {'Year' : '2013', 'wages' : '2050', 'purchase cost' : '5000'}]

        
        const createObjectsWithHeader = (data) => {
            
            const objects = []

            for (let i = 1; i < data.length; i++) {
                objects.push({[data[0]]: data[i]})
            }

            return objects
        }

        const mapHeaderIntoValues = trialData.map((row)=>{
            return (createObjectsWithHeader(row))
        })

        const mergeObjects = () => {
            let temp = []

            for (let i = 0; i < mapHeaderIntoValues[0].length; i++) {
                temp.push({})
            }

            for (let i = 0; i < mapHeaderIntoValues.length; i++) {
                let headerKeys = Object.keys(mapHeaderIntoValues[i])

                for (let x = 0; x < mapHeaderIntoValues[0].length; x++ ) {
                    temp[i][headerKeys[x]] = mapHeaderIntoValues[i][headerKeys[x]]
                }
            }

            return temp
        }
        
        console.log(mapHeaderIntoValues)
        console.log(mergeObjects())

        

    }

    formatTableData()

    const renderTable = () => {

        const chartWidth = '100%'
        const chartHeight = '100%'
        const containerHeight = '100%'
        const containerWidth = '100%'
        const colors = ['#03fc1c', '#03fcf4', '#e303fc', '#fc0345', '#fca903', '#03f8fc', '#82ca9d', '#fc0303', '#036bfc', '#fcdb03']
        const tableMargin = {                    
            top: 5,
            right: 30,
            left: 20,
            bottom: 5}
        const xAxisDatakey = 'col0'

        const chartContent = () => {

            const rowsData = filterHeaderRow(createRows(dummyData.data['rows']))

            console.log(rowsData)

            const output = rowsData.map( (row, index) => {

                return chartType === 'barChart' ? 
                    <Bar key={index} type="monotone" dataKey={`col${index +1 }`} fill={colors[index]} /> :
                    <Line key={index} type="monotone" dataKey={`col${index +1}`} stroke={colors[index]} />
            })  

            console.log(output)
            
            return output
        }
        
        return (
            chartType === 'barChart' ? 
            <ResponsiveContainer width={containerWidth} height={containerHeight}>
                <BarChart
                width={chartWidth}
                height={chartHeight}
                data={filterHeaderRow(createRows(dummyData.data['rows']))}
                margin={tableMargin}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAxisDatakey} />
                    <YAxis />
                    <chartTooltip />
                    <Legend />
                    {chartContent()}
                </BarChart>
            </ResponsiveContainer> 
            
            :

            <ResponsiveContainer width={containerWidth} height={containerHeight}>
                <LineChart
                width={chartWidth}
                height={chartHeight}
                data={filterHeaderRow(createRows(dummyData.data['rows']))}
                margin={tableMargin}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={xAxisDatakey} />
                    <YAxis />
                    <chartTooltip />
                    <Legend />
                    {chartContent()}
                </LineChart>
            </ResponsiveContainer>
        )
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
                        columns={createHeaders(15)}
                        aria-label='Data Table'
                        hideFooter
                        showColumnRightBorder
                        showCellRightBorder
                        disableColumnFilter	
                        disableColumnMenu	
                        disableDensitySelector
                    />
                </Box>

                <Box height={500} mt={4}>
                    {renderTable()}
                </Box>

            </Grid>
        </Grid>
        </>
    )
}