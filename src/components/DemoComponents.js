import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import { Grid, Paper } from "@material-ui/core";
import { Doughnut } from 'react-chartjs-2';

const StackedBardata = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Red Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: '# of Blue Votes',
        data: [2, 3, 20, 5, 1, 4],
        backgroundColor: 'rgb(54, 162, 235)',
      },
      {
        label: '# of Green Votes',
        data: [3, 10, 13, 15, 22, 30],
        backgroundColor: 'rgb(75, 192, 192)',
      },
    ],
  };
  
  const StackedBaroptions = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

const doughnutdata = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};


const genData = () => ({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            type: 'line',
            label: 'Dataset 1',
            // borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            data: [100, 200, 300, 400, 500, 600],
        },
        {
            type: 'bar',
            label: 'Dataset 2',
            // backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [200, 400, 600, 800, 1000, 1200],
            borderColor: 'white',
            borderWidth: 2,
        },
        {
            type: 'bar',
            label: 'Dataset 3',
            // backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            data: [300, 600, 900, 1200, 1500, 1800],
        },
    ],
});

const chartoptions = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

function DemoComponents() {
    const [responsive, setResponsive] = useState("vertical");
    const [tableBodyHeight, setTableBodyHeight] = useState("400px");
    const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
    const [sampledata, setsampleData] = useState({
        details: []
    });
    const [chartdata, setchartData] = useState(genData());
  
    axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {

            const userData = res.data.map((u) => {
                return {
                    "Name": u.name,
                    "Username": u.username,
                    "Email": u.email,
                    "Phone": u.phone
                };
            });
            // console.log(userData);
            setsampleData({
                details: userData

            });

        });

    // console.log(sampledata.details)
    const columns = ["Name", "Username", "Email", "Phone"];

    const options = {
        filter: false,
        print: false,
        viewColumns: false,
        filterType: "dropdown",
        download: false,
        responsive,
        tableBodyHeight,
        tableBodyMaxHeight,
        count: 5
    };


    return (

        <>
            <Grid container spacing={2} justify="center">
                <Grid item xs={12} sm={6} spacing={2}>
                <Bar data={StackedBardata} options={StackedBaroptions} />
                </Grid>
                <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                <Doughnut data={doughnutdata} width={100} height={50} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <MUIDataTable
                        title={"Demo Datatable"}
                        data={sampledata.details}
                        columns={columns}
                        options={options}
                    />
                </Grid>
                <Grid item container direction="column" xs={12} sm={6} spacing={2}>
                    <Grid item>
                        <Bar data={chartdata} options={chartoptions} />
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Grid>


        </>
    );
}

export default DemoComponents;
