import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
// Soft UI Dashboard React examples
import Table from "examples/Tables/Table";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Link } from "react-router-dom";

import SoftButton from "components/SoftButton";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import SoftInput from "components/SoftInput";
import { useState } from "react";
import "../modal.css"
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns = [
  { field: 'orderNo', headerName: 'PRODUCTION ORDER NO', width: 200 },
  { field: 'orderDate', headerName: 'ORDER DATE', width: 130 },
  { field: 'productionItem', headerName: 'PRODUCTION ITEM', width: 200 },
  {
    field: 'quantityPlanned',
    headerName: 'QUANTITY PLANNED',
    type: 'number',
    width: 200,
  },
  {
    field: 'productionItemCode',
    headerName: 'PRODUCTION ITEM CODE',
    width: 200,
  },
];

const rows = [
  { id: 1, orderNo: 'Snow', orderDate: '12/03/2022', productionItem: 35,quantityPlanned:"Spotify Version" ,productionItemCode:'Progress Track'},
  { id: 2, orderNo: 'Lannister', orderDate: '12/03/2022', productionItem: 42,quantityPlanned:"Spotify Version" ,productionItemCode:'Progress Track'},
  { id: 3, orderNo: 'Lannister', orderDate: '12/03/2022', productionItem: 45,quantityPlanned:"Spotify Version",productionItemCode:'Progress Track' },
  { id: 4, orderNo: 'Stark', orderDate: '12/03/2022', productionItem: 16,quantityPlanned:"Spotify Version" ,productionItemCode:'Progress Track'},
  { id: 5, orderNo: 'Targaryen', orderDate: '12/03/2022', productionItem: null,quantityPlanned:"Spotify Version",productionItemCode:'Progress Track' },
  { id: 6, orderNo: 'Melisandre', orderDate: null, productionItem: 150 ,quantityPlanned:"Spotify Version",productionItemCode:'Progress Track'},
  { id: 7, orderNo: 'Clifford', orderDate: '12/03/2022', productionItem: 44 ,quantityPlanned:"Spotify Version",productionItemCode:'Progress Track'},
  { id: 8, orderNo: 'Frances', orderDate: '12/03/2022', productionItem: 36 ,quantityPlanned:"Spotify Version",productionItemCode:'Progress Track'},
  { id: 9, orderNo: 'Roxie', orderDate: '12/03/2022', productionItem: 65 ,quantityPlanned:"Spotify Version",productionItemCode:'Progress Track'},
];

function GoodsReceiptNote() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const text = {
    color: "#0B2F8A",
    fontSize: "15px",
    fontWeight: "500",
    marginRight: "10px",
  };
  
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={15} textAlign="center">
        <SoftTypography
          mb={6}
          style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "30px", lineHeight: "30px"}}
        >
        Goods Receipt Note
        </SoftTypography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                From Document Date
              </SoftTypography>
              <SoftInput
              type="date"
                placeholder="Enter From Order Date..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
              Warehouse
              </SoftTypography>
              <SoftInput
                placeholder="Enter Warehouse..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Series
              </SoftTypography>
              <SoftBox ml={10}>
              <SoftInput
                placeholder="Enter Series..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
              </SoftBox>
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={5}>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                To Document Date
              </SoftTypography>
              <SoftBox ml={2}>
              <SoftInput
              type="date"
                placeholder="Enter To Order Date..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
              </SoftBox>
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            
            
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Document Number
              </SoftTypography>
              <SoftInput
                placeholder="Document Number..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox mt={6} >
        <SoftTypography component={Link}
        to="/goods-filter-note">
        <SoftButton
        variant="contained"
        color="info"
        style={{
          backgroundColor: "#0B2F8A",
          boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
        }}
      >
        Apply Filter
      </SoftButton>
        </SoftTypography>
        
        </SoftBox>
        <SoftBox mt={6}>
          <SoftTypography
            style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "20px", lineHeight: "30px" }}
          >
          Your Goods Receipt Note
          </SoftTypography>
          
        </SoftBox>
        <SoftBox ml={5} mt={5} style={{marginRight:"50px",height:"400px"}} >
        <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </SoftBox>
        <SoftBox style={{ display: "flex"}} mt={4}>
        <SoftBox >
        <SoftButton
        onClick={toggleModal}
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              marginLeft: "100px",
            }}
          >
          Add ITR
          </SoftButton>
          <SoftButton
          component={Link}
        to="/dashboard"
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              marginLeft: "30px",
            }}
          >
          Cancel ITR
          </SoftButton>
        </SoftBox>
        </SoftBox>
        
  <SoftBox style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
  {modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h4 style={{color:"#0B2F8A",marginTop:"20px"}}>Please Fill all the Required Fields</h4>
        <button className="close-modal" onClick={toggleModal} style={{backgroundColor:"#0B2F8A",color:"white",border:"none",borderRadius:"5px",marginTop:"50px",marginBottom:"20px",boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",}}>
          OK
        </button>
      </div>
    </div>
  )}
</SoftBox>
    </SoftBox>

    <Footer />
    </DashboardLayout>
  );
}

export default GoodsReceiptNote;
