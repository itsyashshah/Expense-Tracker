import React, { useContext } from 'react'
import {Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core'
import Form from './Form/Form'
import List from './List/List'
import useStyles from './styles'
import {ExpenseTrackerContext} from '../../context/context'
const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <Card className= {classes.root}>
            <CardHeader title="Expense Tracker"/>
            <CardContent>
                <Typography align="center" variant="h5"> Total Balance ${balance}</Typography>
                <Typography variant="subtitle1" style={{lineHeight:"1.5em", marginTop:"20px"}}> </Typography>
                {/* InfoCard */}
                Try Saying : Add income $100
                <Divider />
                <Form/>
            </CardContent>
            <CardContent className={classes.cartContent}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <List />

                    </Grid>
                </Grid>

                
            </CardContent>
        </Card>
    )
}

export default Main
