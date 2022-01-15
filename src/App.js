import background1 from './background1.jpg';
import background2 from './background2.jpg';
import background3 from './background3.jpg';
import background4 from './background4.jpg';
import parse from "html-react-parser";
import './App.css';

function App() {
  function blockgenrator(data, requiredBlocks) {
    let dataElement = '';
    let newString = data;

    if (typeof data === 'number') {
      // console.log('Its Number converted to string');
      newString = data.toString();
    }
    for (let index = 0; index < requiredBlocks; index++) {
      if (index < newString.length) {
        dataElement =
          dataElement +
          "<span className='blockSpan'>" +
          newString[index].toString() +
          '</span>';
        console.log(newString[index].toString());
      } else {
        dataElement = dataElement + "<span className='blockSpan'> </span>";
      }
    }
    return parse(dataElement);
  }
  return (
    <div>
      <div>
  <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n<!--\nspan.cls_005{font-family:Garamond,serif;font-size:15.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_005{font-family:Garamond,serif;font-size:15.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_007{font-family:Arial,serif;font-size:7.0px;color:rgb(43,42,41);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_007{font-family:Arial,serif;font-size:7.0px;color:rgb(43,42,41);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_008{font-family:Arial,serif;font-size:7.0px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_008{font-family:Arial,serif;font-size:7.0px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_026{font-family:Arial,serif;font-size:7.0px;color:rgb(254,254,254);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_026{font-family:Arial,serif;font-size:7.0px;color:rgb(254,254,254);font-weight:bold;font-style:normal;text-decoration: none}\nspan.cls_012{font-family:Arial,serif;font-size:6.9px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_012{font-family:Arial,serif;font-size:6.9px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_016{font-family:Arial,serif;font-size:6.7px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_016{font-family:Arial,serif;font-size:6.7px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_004{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_004{font-family:Arial,serif;font-size:7.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_018{font-family:Arial,serif;font-size:6.5px;color:rgb(197,197,197);font-weight:normal;font-style:italic;text-decoration: none}\ndiv.cls_018{font-family:Arial,serif;font-size:6.5px;color:rgb(197,197,197);font-weight:normal;font-style:italic;text-decoration: none}\nspan.cls_022{font-family:Arial,serif;font-size:6.4px;color:rgb(197,197,197);font-weight:normal;font-style:italic;text-decoration: none}\ndiv.cls_022{font-family:Arial,serif;font-size:6.4px;color:rgb(197,197,197);font-weight:normal;font-style:italic;text-decoration: none}\nspan.cls_029{font-family:\"Calibri\",serif;font-size:8.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_029{font-family:\"Calibri\",serif;font-size:8.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_032{font-family:Arial,serif;font-size:6.5px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\ndiv.cls_032{font-family:Arial,serif;font-size:6.5px;color:rgb(43,42,41);font-weight:normal;font-style:normal;text-decoration: none}\nspan.cls_034{font-family:\"Calibri Bold\",serif;font-size:8.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\ndiv.cls_034{font-family:\"Calibri Bold\",serif;font-size:8.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}\n-->\n" }} />
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: '0px', width: '595px', height: '842px', borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '0px', top: '0px'}}>
    <img src={background1} width={595} height={842} />
      </div>
    <div style={{position: 'absolute', left: '56.40px', top: '57.56px'}} className="cls_005"><span className="cls_005">CLAIM FORM - PART A</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '81.32px'}} className="cls_007"><span className="cls_007">TO BE FILLED IN BY THE INSURED</span></div>
    <div style={{position: 'absolute', left: '486.34px', top: '81.44px'}} className="cls_008"><span className="cls_008">(To be filled in block letter)</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '91.90px'}} className="cls_008"><span className="cls_008">The issue of this form is not to be taken as an admission of liability</span></div>
    <div style={{position: 'absolute', left: '258.89px', top: '110.02px'}} className="cls_026"><span className="cls_026">DETAILS OF PRIMARY INSURED</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '126.46px'}} className="cls_008"><span className="cls_008">a) Policy No :</span>
    <div style={{position: 'absolute', left:'47px',top:'0px',width:'260px'}}> {blockgenrator('040621',21)}</div>
    
    </div>
    <div style={{position: 'absolute', left: '361.51px', top: '126.46px'}} className="cls_008"><span className="cls_008">b) SI. No/certificate No :</span>
    <div style={{position: 'absolute', left:'75px',top:'0px',width:'260px'}}> {blockgenrator('040621',11)}</div>
    </div>
    <div style={{position: 'absolute', left: '56.88px', top: '141.10px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">Company / TPA ID No :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '155.74px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_008">Name :</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '170.38px'}} className="cls_012"><span className="cls_012">e) </span><span className="cls_008">Address :</span></div>
    <div style={{position: 'absolute', left: '65.18px', top: '199.78px'}} className="cls_008"><span className="cls_008">City :</span></div>
    <div style={{position: 'absolute', left: '347.47px', top: '200.26px'}} className="cls_008"><span className="cls_008">State :</span></div>
    <div style={{position: 'absolute', left: '65.06px', top: '214.90px'}} className="cls_008"><span className="cls_008">Pin Code :</span></div>
    <div style={{position: 'absolute', left: '185.09px', top: '214.90px'}} className="cls_008"><span className="cls_008">Phone No :</span></div>
    <div style={{position: 'absolute', left: '347.47px', top: '214.90px'}} className="cls_008"><span className="cls_008">Email ID :</span></div>
    <div style={{position: 'absolute', left: '254.33px', top: '239.38px'}} className="cls_026"><span className="cls_026">DETAILS OF INSURANCE HISTORY</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '254.38px'}} className="cls_012"><span className="cls_012">a) </span><span className="cls_008">Currently covered by any other Mediclaim / Health Insurance :</span></div>
    <div style={{position: 'absolute', left: '274.13px', top: '254.86px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '311.59px', top: '254.86px'}} className="cls_008"><span className="cls_008">No</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '268.95px'}} className="cls_012"><span className="cls_012">b) </span><span className="cls_008">Date of commencement of first insurance without break :</span></div>
    <div style={{position: 'absolute', left: '363.19px', top: '269.29px'}} className="cls_008"><span className="cls_008">(copy of policies to be attached)</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '282.03px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">If Company Name :</span></div>
    <div style={{position: 'absolute', left: '306.91px', top: '283.93px'}} className="cls_008"><span className="cls_008">Policy No :</span></div>
    <div style={{position: 'absolute', left: '65.54px', top: '299.29px'}} className="cls_008"><span className="cls_008">Sum Insured (Rs.) :</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '313.57px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_008">Have you been hospitalized in the last 4 year?</span></div>
    <div style={{position: 'absolute', left: '226.25px', top: '314.05px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '256.49px', top: '314.05px'}} className="cls_016"><span className="cls_016">No</span></div>
    <div style={{position: 'absolute', left: '284.09px', top: '313.69px'}} className="cls_008"><span className="cls_008">Date :</span></div>
    <div style={{position: 'absolute', left: '416.38px', top: '313.21px'}} className="cls_008"><span className="cls_008">Diagnosis :</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '327.99px'}} className="cls_012"><span className="cls_012">e) </span><span className="cls_008">Previously covered by any other Mediclaim / Health Insurance :</span></div>
    <div style={{position: 'absolute', left: '274.73px', top: '328.69px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '301.15px', top: '328.11px'}} className="cls_016"><span className="cls_016">No</span><span className="cls_004"> </span><span className="cls_012">  f) </span><span className="cls_008">If Yes, Company Name :</span></div>
    <div style={{position: 'absolute', left: '233.81px', top: '350.05px'}} className="cls_026"><span className="cls_026">DETAILS OF INSURED PERSON HOSPITALIZED</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '368.29px'}} className="cls_012"><span className="cls_012">a) </span><span className="cls_008">Name :</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '383.17px'}} className="cls_012"><span className="cls_012">b) </span><span className="cls_008">Gender :</span></div>
    <div style={{position: 'absolute', left: '108.14px', top: '383.92px'}} className="cls_016"><span className="cls_016">Male</span></div>
    <div style={{position: 'absolute', left: '141.14px', top: '383.65px'}} className="cls_016"><span className="cls_016">Female</span></div>
    <div style={{position: 'absolute', left: '180.05px', top: '383.77px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">Age : Year</span></div>
    <div style={{position: 'absolute', left: '229.13px', top: '382.69px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '241.01px', top: '382.69px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '256.37px', top: '383.77px'}} className="cls_016"><span className="cls_016">Months</span></div>
    <div style={{position: 'absolute', left: '287.45px', top: '383.41px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '299.47px', top: '383.41px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '335.11px', top: '382.93px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_008">Date of Brith</span></div>
    <div style={{position: 'absolute', left: '406.99px', top: '384.01px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '419.02px', top: '384.01px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '442.90px', top: '382.69px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '454.66px', top: '382.69px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '477.46px', top: '383.41px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '489.34px', top: '383.41px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '397.57px'}} className="cls_012"><span className="cls_012">e) </span><span className="cls_008">Relationship to Primary Insured :</span></div>
    <div style={{position: 'absolute', left: '180.53px', top: '397.57px'}} className="cls_016"><span className="cls_016">Self</span></div>
    <div style={{position: 'absolute', left: '210.77px', top: '397.57px'}} className="cls_016"><span className="cls_016">Spouse</span></div>
    <div style={{position: 'absolute', left: '251.81px', top: '397.45px'}} className="cls_016"><span className="cls_016">Child</span></div>
    <div style={{position: 'absolute', left: '286.49px', top: '397.69px'}} className="cls_016"><span className="cls_016">Father</span></div>
    <div style={{position: 'absolute', left: '324.91px', top: '397.45px'}} className="cls_016"><span className="cls_016">Mother</span></div>
    <div style={{position: 'absolute', left: '363.07px', top: '398.17px'}} className="cls_016"><span className="cls_016">Other</span></div>
    <div style={{position: 'absolute', left: '395.59px', top: '397.57px'}} className="cls_008"><span className="cls_008">(Please specify)</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '412.21px'}} className="cls_012"><span className="cls_012">f) </span><span className="cls_008">Occupation :</span></div>
    <div style={{position: 'absolute', left: '120.14px', top: '412.33px'}} className="cls_016"><span className="cls_016">Service</span></div>
    <div style={{position: 'absolute', left: '160.94px', top: '412.33px'}} className="cls_008"><span className="cls_008">Self Employed</span></div>
    <div style={{position: 'absolute', left: '221.69px', top: '412.21px'}} className="cls_016"><span className="cls_016">Homemaker</span></div>
    <div style={{position: 'absolute', left: '274.13px', top: '412.33px'}} className="cls_016"><span className="cls_016">Student</span></div>
    <div style={{position: 'absolute', left: '318.07px', top: '412.93px'}} className="cls_016"><span className="cls_016">Retired</span></div>
    <div style={{position: 'absolute', left: '357.43px', top: '412.93px'}} className="cls_016"><span className="cls_016">Other</span></div>
    <div style={{position: 'absolute', left: '395.71px', top: '412.21px'}} className="cls_008"><span className="cls_008">(Please specify)</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '426.97px'}} className="cls_008"><span className="cls_008">e) Address (if different from Above) :</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '456.27px'}} className="cls_008"><span className="cls_008">City :</span></div>
    <div style={{position: 'absolute', left: '347.47px', top: '456.75px'}} className="cls_008"><span className="cls_008">State :</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '471.51px'}} className="cls_008"><span className="cls_008">Pin Code :</span></div>
    <div style={{position: 'absolute', left: '186.41px', top: '471.51px'}} className="cls_008"><span className="cls_008">Phone No :</span></div>
    <div style={{position: 'absolute', left: '347.23px', top: '471.51px'}} className="cls_008"><span className="cls_008">Email ID :</span></div>
    <div style={{position: 'absolute', left: '263.21px', top: '492.87px'}} className="cls_026"><span className="cls_026">DETAIL OF HOSPITALIZATION</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '511.59px'}} className="cls_012"><span className="cls_012">a) </span><span className="cls_008">Name of Hospital where Admitted :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '526.23px'}} className="cls_012"><span className="cls_012">b) </span><span className="cls_008">Room Category Occupied :</span></div>
    <div style={{position: 'absolute', left: '163.34px', top: '527.19px'}} className="cls_008"><span className="cls_008">Day Care</span></div>
    <div style={{position: 'absolute', left: '212.69px', top: '527.19px'}} className="cls_008"><span className="cls_008">Single Occupancy</span></div>
    <div style={{position: 'absolute', left: '288.53px', top: '527.19px'}} className="cls_008"><span className="cls_008">Twin Sharing</span></div>
    <div style={{position: 'absolute', left: '348.07px', top: '527.19px'}} className="cls_008"><span className="cls_008">3 Or more beds per room</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '540.87px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">Hospitalization due to :</span></div>
    <div style={{position: 'absolute', left: '153.62px', top: '541.14px'}} className="cls_016"><span className="cls_016">Injury</span></div>
    <div style={{position: 'absolute', left: '187.13px', top: '541.14px'}} className="cls_016"><span className="cls_016">Illness</span></div>
    <div style={{position: 'absolute', left: '229.61px', top: '540.87px'}} className="cls_016"><span className="cls_016">Maternity</span></div>
    <div style={{position: 'absolute', left: '269.45px', top: '540.87px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_008">Date of Injury / Date Disease First Detected / Date of Delivery :</span></div>
    <div style={{position: 'absolute', left: '478.30px', top: '541.95px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '490.18px', top: '541.95px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '514.06px', top: '540.63px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '525.94px', top: '540.63px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '548.76px', top: '541.35px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '560.64px', top: '541.35px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '555.75px'}} className="cls_012"><span className="cls_012">e) </span><span className="cls_008">Date of Admission :</span></div>
    <div style={{position: 'absolute', left: '136.22px', top: '556.59px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '148.10px', top: '556.59px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '171.98px', top: '555.27px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '183.89px', top: '555.27px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '206.69px', top: '555.99px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '218.57px', top: '555.99px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '233.45px', top: '555.63px'}} className="cls_012"><span className="cls_012">f) </span><span className="cls_008">Time :</span></div>
    <div style={{position: 'absolute', left: '263.57px', top: '555.99px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '275.45px', top: '555.99px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '290.21px', top: '555.99px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '302.11px', top: '555.99px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '316.51px', top: '555.75px'}} className="cls_012"><span className="cls_012">g) </span><span className="cls_008">Date Of Discharge :</span></div>
    <div style={{position: 'absolute', left: '393.43px', top: '556.71px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '405.31px', top: '556.71px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '429.10px', top: '555.39px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '440.98px', top: '555.39px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '463.78px', top: '556.11px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '475.66px', top: '556.11px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '490.54px', top: '555.75px'}} className="cls_012"><span className="cls_012">h) </span><span className="cls_008">Time :</span></div>
    <div style={{position: 'absolute', left: '522.10px', top: '555.99px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '534.00px', top: '555.99px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '548.76px', top: '555.99px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '560.64px', top: '555.99px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '570.27px'}} className="cls_012"><span className="cls_012">i) </span><span className="cls_008">If Injury Give Cause :</span></div>
    <div style={{position: 'absolute', left: '145.22px', top: '570.27px'}} className="cls_008"><span className="cls_008">Self Inflicted</span></div>
    <div style={{position: 'absolute', left: '213.05px', top: '570.27px'}} className="cls_008"><span className="cls_008">Road TrafficAccident</span></div>
    <div style={{position: 'absolute', left: '305.35px', top: '570.27px'}} className="cls_008"><span className="cls_008">Substance / Alcohol Consumption</span></div>
    <div style={{position: 'absolute', left: '423.94px', top: '570.27px'}} className="cls_008"><span className="cls_008">i) If Medico legal :</span></div>
    <div style={{position: 'absolute', left: '499.78px', top: '570.27px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '531.60px', top: '570.27px'}} className="cls_008"><span className="cls_008">No</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '584.79px'}} className="cls_012"><span className="cls_012">ii) </span><span className="cls_008">Reported To Police :</span></div>
    <div style={{position: 'absolute', left: '138.50px', top: '585.51px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '165.86px', top: '585.51px'}} className="cls_016"><span className="cls_016">No</span></div>
    <div style={{position: 'absolute', left: '195.41px', top: '584.79px'}} className="cls_012"><span className="cls_012">iii) </span><span className="cls_008">MLC Report &amp; Police FIR Attached :</span></div>
    <div style={{position: 'absolute', left: '328.87px', top: '585.51px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '357.79px', top: '584.79px'}} className="cls_016"><span className="cls_016">No</span><span className="cls_004"> </span><span className="cls_012">   j) </span><span className="cls_008">System of Medicine :</span></div>
    <div style={{position: 'absolute', left: '282.89px', top: '606.87px'}} className="cls_026"><span className="cls_026">DETAIL OF CLAIM</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '622.38px'}} className="cls_012"><span className="cls_012">a) </span><span className="cls_008">Details of The Treatment Expenses Claimed</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '637.14px'}} className="cls_012"><span className="cls_012">i. </span><span className="cls_008">Pre-hospitalization Expenses :</span></div>
    <div style={{position: 'absolute', left: '173.66px', top: '637.62px'}} className="cls_008"><span className="cls_008">Rs.</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '637.26px'}} className="cls_012"><span className="cls_012">ii. </span><span className="cls_008">Hospitalization Expenses :</span></div>
    <div style={{position: 'absolute', left: '459.94px', top: '637.74px'}} className="cls_008"><span className="cls_008">Rs.</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '651.78px'}} className="cls_012"><span className="cls_012">iii. </span><span className="cls_008">Post-hospitalization Expenses : Rs.</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '651.80px'}} className="cls_012"><span className="cls_012">iv. </span><span className="cls_008">Health-Check up Cost :</span></div>
    <div style={{position: 'absolute', left: '459.94px', top: '652.38px'}} className="cls_008"><span className="cls_008">Rs.</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '666.44px'}} className="cls_012"><span className="cls_012">v. </span><span className="cls_008">Ambulance charges :</span></div>
    <div style={{position: 'absolute', left: '174.26px', top: '667.02px'}} className="cls_016"><span className="cls_016">Rs.</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '666.44px'}} className="cls_012"><span className="cls_012">vi. </span><span className="cls_008">Other (code) :</span></div>
    <div style={{position: 'absolute', left: '459.94px', top: '667.02px'}} className="cls_008"><span className="cls_008">Rs.</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '681.42px'}} className="cls_007"><span className="cls_007">Total</span></div>
    <div style={{position: 'absolute', left: '459.94px', top: '681.42px'}} className="cls_007"><span className="cls_007">Rs.</span></div>
    <div style={{position: 'absolute', left: '66.62px', top: '695.60px'}} className="cls_012"><span className="cls_012">vii. </span><span className="cls_008">Pre-hospitalisation period :   days</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '695.58px'}} className="cls_008"><span className="cls_008">viii. Post-hospitalization Period :</span></div>
    <div style={{position: 'absolute', left: '454.18px', top: '695.58px'}} className="cls_008"><span className="cls_008">days</span></div>
    <div style={{position: 'absolute', left: '478.78px', top: '696.54px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '490.54px', top: '696.54px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '514.42px', top: '695.22px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '526.30px', top: '695.22px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '549.12px', top: '695.94px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '561.00px', top: '695.94px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '710.70px'}} className="cls_012"><span className="cls_012">b) </span><span className="cls_008">Claim for Domiciliary Hospitalization :</span></div>
    <div style={{position: 'absolute', left: '197.09px', top: '710.82px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '229.25px', top: '710.82px'}} className="cls_016"><span className="cls_016">No</span></div>
    <div style={{position: 'absolute', left: '244.97px', top: '710.94px'}} className="cls_008"><span className="cls_008">(If yes, provide details in annexure)</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '725.22px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">Details Of Lump sum / Cash Benefit Claimed:</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '739.75px'}} className="cls_012"><span className="cls_012">i. </span><span className="cls_008">Hospital Daily Cash :</span></div>
    <div style={{position: 'absolute', left: '173.78px', top: '740.34px'}} className="cls_016"><span className="cls_016">Rs.</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '739.62px'}} className="cls_008"><span className="cls_008">ii. Surgical Cash :</span></div>
    <div style={{position: 'absolute', left: '461.86px', top: '740.34px'}} className="cls_008"><span className="cls_008">Rs.</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '754.87px'}} className="cls_012"><span className="cls_012">ii. </span><span className="cls_008">Critical Illness Benefit :</span></div>
    <div style={{position: 'absolute', left: '173.78px', top: '754.98px'}} className="cls_016"><span className="cls_016">Rs.</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '754.26px'}} className="cls_008"><span className="cls_008">iv. Convalescence :</span></div>
    <div style={{position: 'absolute', left: '461.86px', top: '754.98px'}} className="cls_008"><span className="cls_008">Rs.</span></div>
    <div style={{position: 'absolute', left: '64.70px', top: '770.58px'}} className="cls_008"><span className="cls_008">v. Pre/Post Hospitalization Lump</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '769.62px'}} className="cls_008"><span className="cls_008">vi. Other :</span></div>
    <div style={{position: 'absolute', left: '461.86px', top: '769.62px'}} className="cls_008"><span className="cls_008">Rs.</span></div>
    <div style={{position: 'absolute', left: '173.78px', top: '775.62px'}} className="cls_016"><span className="cls_016">Rs.</span></div>
    <div style={{position: 'absolute', left: '70.46px', top: '780.06px'}} className="cls_008"><span className="cls_008">Sum Benefit :</span></div>
    <div style={{position: 'absolute', left: '348.79px', top: '784.14px'}} className="cls_007"><span className="cls_007">Total</span></div>
    <div style={{position: 'absolute', left: '461.86px', top: '784.02px'}} className="cls_007"><span className="cls_007">Rs.</span></div>
    <div style={{position: 'absolute', left: '449.62px', top: '820.28px'}} className="cls_029"><span className="cls_029">(IMPORTANT: PLEASE TURNOVER)</span></div>
  </div>
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: '852px', width: '595px', height: '842px', borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '0px', top: '0px'}}>
    <img src={background2} width={595} height={842} />
    </div>
    <div style={{position: 'absolute', left: '244.61px', top: '64.40px'}} className="cls_026"><span className="cls_026">Claim Documents Submitted - Check List</span></div>
    <div style={{position: 'absolute', left: '79.10px', top: '82.78px'}} className="cls_008"><span className="cls_008">Claim Form Duly Signed</span></div>
    <div style={{position: 'absolute', left: '354.07px', top: '82.78px'}} className="cls_008"><span className="cls_008">Operation Theater Notes</span></div>
    <div style={{position: 'absolute', left: '79.10px', top: '97.42px'}} className="cls_008"><span className="cls_008">Copy of the claim Intimation</span></div>
    <div style={{position: 'absolute', left: '354.07px', top: '97.42px'}} className="cls_008"><span className="cls_008">ECG</span></div>
    <div style={{position: 'absolute', left: '79.10px', top: '111.94px'}} className="cls_008"><span className="cls_008">Hospital Main Bill</span></div>
    <div style={{position: 'absolute', left: '354.07px', top: '112.42px'}} className="cls_008"><span className="cls_008">Doctor’s Request For Investigation</span></div>
    <div style={{position: 'absolute', left: '79.10px', top: '126.58px'}} className="cls_008"><span className="cls_008">Hospital Break-up Bill</span></div>
    <div style={{position: 'absolute', left: '354.07px', top: '126.58px'}} className="cls_008"><span className="cls_008">Investigation Report (Including CT / MRI/ USG / HPE)</span></div>
    <div style={{position: 'absolute', left: '79.10px', top: '141.34px'}} className="cls_008"><span className="cls_008">Hospital Bill Payment Receipt</span></div>
    <div style={{position: 'absolute', left: '354.07px', top: '141.34px'}} className="cls_008"><span className="cls_008">Other</span></div>
    <div style={{position: 'absolute', left: '79.10px', top: '155.86px'}} className="cls_008"><span className="cls_008">Hospital Discharge Summary</span></div>
    <div style={{position: 'absolute', left: '79.10px', top: '170.62px'}} className="cls_008"><span className="cls_008">Pharmacy Bill</span></div>
    <div style={{position: 'absolute', left: '263.69px', top: '198.10px'}} className="cls_026"><span className="cls_026">DETAILS OF BILL ENCLOSED</span></div>
    <div style={{position: 'absolute', left: '60.26px', top: '216.94px'}} className="cls_007"><span className="cls_007">SI. No</span></div>
    <div style={{position: 'absolute', left: '88.82px', top: '216.94px'}} className="cls_007"><span className="cls_007">Bill No</span></div>
    <div style={{position: 'absolute', left: '141.38px', top: '217.06px'}} className="cls_008"><span className="cls_008">Date</span></div>
    <div style={{position: 'absolute', left: '247.25px', top: '216.34px'}} className="cls_007"><span className="cls_007">Issued by</span></div>
    <div style={{position: 'absolute', left: '351.43px', top: '216.94px'}} className="cls_007"><span className="cls_007">Towards</span></div>
    <div style={{position: 'absolute', left: '503.50px', top: '216.94px'}} className="cls_007"><span className="cls_007">Amount (RS)</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '228.46px'}} className="cls_032"><span className="cls_032">1.</span></div>
    <div style={{position: 'absolute', left: '117.14px', top: '229.06px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '229.06px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '140.06px', top: '228.46px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.94px', top: '228.46px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.78px', top: '227.74px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.66px', top: '227.74px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '350.95px', top: '228.22px'}} className="cls_008"><span className="cls_008">Hospital Main Bill</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '240.46px'}} className="cls_032"><span className="cls_032">2.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '240.94px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '240.94px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '240.34px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '240.34px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '239.62px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '239.62px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '351.07px', top: '240.37px'}} className="cls_016"><span className="cls_016">Pre-hospitalization:</span></div>
    <div style={{position: 'absolute', left: '435.94px', top: '240.10px'}} className="cls_008"><span className="cls_008">Nos</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '252.34px'}} className="cls_032"><span className="cls_032">3.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '252.70px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '252.70px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '252.10px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '252.10px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '251.38px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '251.38px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '351.07px', top: '252.13px'}} className="cls_016"><span className="cls_016">Pre-hospitalization:</span></div>
    <div style={{position: 'absolute', left: '435.94px', top: '251.86px'}} className="cls_008"><span className="cls_008">Nos</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '264.37px'}} className="cls_032"><span className="cls_032">4.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '264.61px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '264.61px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '264.01px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '264.01px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '263.29px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '263.29px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '351.07px', top: '263.77px'}} className="cls_008"><span className="cls_008">Pharmacy Bills</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '276.25px'}} className="cls_032"><span className="cls_032">5.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '276.37px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '276.37px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '275.77px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '275.77px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '275.05px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '275.05px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '288.13px'}} className="cls_032"><span className="cls_032">6.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '288.13px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '288.13px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '287.53px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '287.53px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '286.81px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '286.81px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '300.13px'}} className="cls_032"><span className="cls_032">7.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '300.01px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '300.01px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '299.41px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '299.41px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '298.69px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '298.69px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '312.01px'}} className="cls_032"><span className="cls_032">8.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '311.77px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '311.77px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '311.17px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '311.17px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '310.45px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '310.45px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '67.34px', top: '324.01px'}} className="cls_032"><span className="cls_032">9.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '323.53px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '323.53px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '322.93px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '322.93px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '322.21px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '322.21px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '65.54px', top: '336.01px'}} className="cls_032"><span className="cls_032">10.</span></div>
    <div style={{position: 'absolute', left: '117.02px', top: '335.41px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '128.90px', top: '335.41px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '139.94px', top: '334.81px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '151.82px', top: '334.81px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '164.54px', top: '334.09px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '176.42px', top: '334.09px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '243.29px', top: '364.69px'}} className="cls_026"><span className="cls_026">DETAILS PRIMARY INSURED’S ACCOUNT</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '383.29px'}} className="cls_008"><span className="cls_008">a) Pan :</span></div>
    <div style={{position: 'absolute', left: '312.91px', top: '383.77px'}} className="cls_008"><span className="cls_008">b) Account Number :</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '398.53px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">Bank Name and Branch :</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '413.05px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_008">Cheque/ DD Payable details :</span></div>
    <div style={{position: 'absolute', left: '312.91px', top: '412.57px'}} className="cls_008"><span className="cls_008">e) IFSC Code :</span></div>
    <div style={{position: 'absolute', left: '257.45px', top: '442.71px'}} className="cls_026"><span className="cls_026">DECLARATION BY THE INSURED</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '458.55px'}} className="cls_008"><span className="cls_008">I hereby declare that the information furnished in this claim form is true &amp; correct to the best of my knowledge and belief. If I have made any false or untrue statement,</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '468.03px'}} className="cls_008"><span className="cls_008">suppression or concealment of any material fact, my right to claim reimbursement shall be forfeited. I also consent &amp; authorize TPA/ insurance company, to seek necessary</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '477.39px'}} className="cls_008"><span className="cls_008">medical information / documents from any hospital / Medical Practitioner who has attended on the person against whom this claim is made. I hereby declare that I have</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '486.75px'}} className="cls_008"><span className="cls_008">included all the bills / receipts for the purpose of this claim &amp; that I will not be making any supplementary claim except the pre/post-hospitalization claim, if any.</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '529.71px'}} className="cls_008"><span className="cls_008">Date :</span></div>
    <div style={{position: 'absolute', left: '88.10px', top: '529.95px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '99.98px', top: '529.95px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '111.02px', top: '529.47px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '122.90px', top: '529.47px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '135.62px', top: '528.63px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '147.38px', top: '528.63px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '212.81px', top: '529.71px'}} className="cls_008"><span className="cls_008">Place :</span></div>
    <div style={{position: 'absolute', left: '352.03px', top: '531.75px'}} className="cls_008"><span className="cls_008">Signature of the insured</span></div>
    <div style={{position: 'absolute', left: '85.82px', top: '615.42px'}} className="cls_034"><span className="cls_034">ANTI-MONEY LAUNDERING REQUIREMENT (For claim more than or equal to Rs. 1 Lakh - One Document each from (1) and (2))</span></div>
    <div style={{position: 'absolute', left: '87.62px', top: '629.22px'}} className="cls_029"><span className="cls_029">1. Proposer’s Identification (a) Passport (b) P  N Card (c) Voter’s ID Card (d) Driving License (e)    DH  R Card</span></div>
    <div style={{position: 'absolute', left: '87.62px', top: '643.02px'}} className="cls_029"><span className="cls_029">2. Proposer’s   ddress (a) Current Telephone /Mobile Bill (b) Current Bank Passbook (c) Electricity Bill (d) Ration Card (e) Valid Rent</span></div>
    <div style={{position: 'absolute', left: '94.82px', top: '652.74px'}} className="cls_029"><span className="cls_029">Lease Agreement</span></div>
  </div>
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: '1704px', width: '595px', height: '842px', borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '0px', top: '0px'}}>
    <img src={background3} width={595} height={842} />
      </div>
    <div style={{position: 'absolute', left: '56.40px', top: '57.56px'}} className="cls_005"><span className="cls_005">CLAIM FORM - PART B</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '81.32px'}} className="cls_007"><span className="cls_007">TO BE FILLED IN BY THE HOSPITAL</span></div>
    <div style={{position: 'absolute', left: '486.34px', top: '81.44px'}} className="cls_008"><span className="cls_008">(To be filled in block letter)</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '91.42px'}} className="cls_008"><span className="cls_008">The issue of this form is not to be taken as an admission of liability</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '102.82px'}} className="cls_008"><span className="cls_008">Please include the original preauthorization request form in lieu of PART A</span></div>
    <div style={{position: 'absolute', left: '274.13px', top: '128.62px'}} className="cls_026"><span className="cls_026">DETAILS OF HOSPITAL</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '148.54px'}} className="cls_012"><span className="cls_012">a) </span><span className="cls_008">Name of Hospital :</span></div>
    <div style={{position: 'absolute', left: '56.64px', top: '163.18px'}} className="cls_012"><span className="cls_012">b) </span><span className="cls_008">Hospital ID :</span></div>
    <div style={{position: 'absolute', left: '313.75px', top: '163.30px'}} className="cls_008"><span className="cls_008">c) Type of Hospital :</span></div>
    <div style={{position: 'absolute', left: '392.59px', top: '163.90px'}} className="cls_016"><span className="cls_016">Network</span></div>
    <div style={{position: 'absolute', left: '440.74px', top: '163.90px'}} className="cls_008"><span className="cls_008">Non Network</span></div>
    <div style={{position: 'absolute', left: '490.90px', top: '163.30px'}} className="cls_008"><span className="cls_008">(If non network section E)</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '177.82px'}} className="cls_008"><span className="cls_008">d) Name of the treating doctor :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '193.18px'}} className="cls_008"><span className="cls_008">e) Qualification :</span></div>
    <div style={{position: 'absolute', left: '335.71px', top: '193.18px'}} className="cls_008"><span className="cls_008">f) Registration No. with State Code :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '207.10px'}} className="cls_008"><span className="cls_008">g) Phone No :</span></div>
    <div style={{position: 'absolute', left: '250.25px', top: '235.54px'}} className="cls_026"><span className="cls_026">DETAILS OF THE PATIENT ADMITTED</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '253.90px'}} className="cls_012"><span className="cls_012">a) </span><span className="cls_008">Name of the Patient :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '270.25px'}} className="cls_012"><span className="cls_012">b) </span><span className="cls_008">IP Registration Number :</span></div>
    <div style={{position: 'absolute', left: '307.75px', top: '270.37px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">Gender :</span></div>
    <div style={{position: 'absolute', left: '359.59px', top: '271.12px'}} className="cls_016"><span className="cls_016">Male</span></div>
    <div style={{position: 'absolute', left: '395.35px', top: '270.85px'}} className="cls_016"><span className="cls_016">Female</span></div>
    <div style={{position: 'absolute', left: '441.82px', top: '270.97px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_008">Age : Year</span></div>
    <div style={{position: 'absolute', left: '490.30px', top: '269.89px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '502.18px', top: '269.89px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '515.74px', top: '270.97px'}} className="cls_008"><span className="cls_008">Months</span></div>
    <div style={{position: 'absolute', left: '548.76px', top: '270.61px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '560.64px', top: '270.61px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '286.33px'}} className="cls_012"><span className="cls_012">e) </span><span className="cls_008">Date of Birth :</span></div>
    <div style={{position: 'absolute', left: '121.58px', top: '287.05px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '133.34px', top: '287.05px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '144.50px', top: '286.45px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '156.38px', top: '286.45px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '169.22px', top: '285.73px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '181.01px', top: '285.73px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '213.77px', top: '286.33px'}} className="cls_012"><span className="cls_012">f) </span><span className="cls_008">Date of Admission :</span></div>
    <div style={{position: 'absolute', left: '288.53px', top: '287.05px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '300.43px', top: '287.05px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '311.47px', top: '286.45px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '323.35px', top: '286.45px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '336.19px', top: '285.73px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '348.07px', top: '285.73px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '380.59px', top: '286.33px'}} className="cls_012"><span className="cls_012">g) </span><span className="cls_008">Time :</span></div>
    <div style={{position: 'absolute', left: '415.30px', top: '286.69px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '427.18px', top: '286.69px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '441.94px', top: '286.69px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '453.70px', top: '286.69px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '56.64px', top: '302.53px'}} className="cls_012"><span className="cls_012">h) </span><span className="cls_008">Date of Discharge :</span></div>
    <div style={{position: 'absolute', left: '133.34px', top: '303.25px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '145.22px', top: '303.25px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '156.38px', top: '302.65px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '168.26px', top: '302.65px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '181.01px', top: '301.93px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '192.89px', top: '301.93px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '210.89px', top: '302.53px'}} className="cls_008"><span className="cls_008">i) Time :</span></div>
    <div style={{position: 'absolute', left: '241.25px', top: '302.89px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '253.13px', top: '302.89px'}} className="cls_022"><span className="cls_022">h</span></div>
    <div style={{position: 'absolute', left: '267.77px', top: '302.89px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '279.65px', top: '302.89px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '298.87px', top: '302.89px'}} className="cls_008"><span className="cls_008">j) Type of Admission :</span></div>
    <div style={{position: 'absolute', left: '376.99px', top: '303.16px'}} className="cls_016"><span className="cls_016">Emergency</span></div>
    <div style={{position: 'absolute', left: '437.50px', top: '303.64px'}} className="cls_016"><span className="cls_016">Planned</span></div>
    <div style={{position: 'absolute', left: '487.30px', top: '303.37px'}} className="cls_008"><span className="cls_008">Day Care</span></div>
    <div style={{position: 'absolute', left: '540.72px', top: '303.37px'}} className="cls_008"><span className="cls_008">Maternity</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '318.85px'}} className="cls_008"><span className="cls_008">k) If Maternity :</span></div>
    <div style={{position: 'absolute', left: '181.73px', top: '319.45px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '193.61px', top: '319.45px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '204.65px', top: '318.85px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '216.53px', top: '318.85px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '229.37px', top: '318.13px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '241.25px', top: '318.13px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '115.10px', top: '319.33px'}} className="cls_008"><span className="cls_008">i. Date of Delivery :</span></div>
    <div style={{position: 'absolute', left: '262.25px', top: '320.53px'}} className="cls_008"><span className="cls_008">ii. Grade of status :</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '333.85px'}} className="cls_008"><span className="cls_008">j) Status at time of discharge : :</span></div>
    <div style={{position: 'absolute', left: '164.42px', top: '334.81px'}} className="cls_008"><span className="cls_008">Discharge to home</span></div>
    <div style={{position: 'absolute', left: '258.17px', top: '334.81px'}} className="cls_008"><span className="cls_008">Discharge to another hospital</span></div>
    <div style={{position: 'absolute', left: '383.83px', top: '334.81px'}} className="cls_008"><span className="cls_008">Deceased</span></div>
    <div style={{position: 'absolute', left: '237.05px', top: '360.01px'}} className="cls_026"><span className="cls_026">DETAIL OF AILMENT DIAGNOSED (PRIMARY)</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '378.99px'}} className="cls_012"><span className="cls_012">a)</span></div>
    <div style={{position: 'absolute', left: '161.06px', top: '379.81px'}} className="cls_008"><span className="cls_008">ICD 10 Codes</span></div>
    <div style={{position: 'absolute', left: '251.21px', top: '380.08px'}} className="cls_016"><span className="cls_016">Description</span></div>
    <div style={{position: 'absolute', left: '325.63px', top: '379.81px'}} className="cls_016"><span className="cls_016">b)</span></div>
    <div style={{position: 'absolute', left: '418.54px', top: '379.81px'}} className="cls_008"><span className="cls_008">ICD 10 Codes</span></div>
    <div style={{position: 'absolute', left: '508.42px', top: '379.81px'}} className="cls_008"><span className="cls_008">Description</span></div>
    <div style={{position: 'absolute', left: '63.26px', top: '397.09px'}} className="cls_012"><span className="cls_012">i) </span><span className="cls_008">Primary Diagnosis :</span></div>
    <div style={{position: 'absolute', left: '325.51px', top: '397.09px'}} className="cls_012"><span className="cls_012">i) </span><span className="cls_008">Procedure 1 :</span></div>
    <div style={{position: 'absolute', left: '63.26px', top: '423.61px'}} className="cls_012"><span className="cls_012">ii) </span><span className="cls_008">Additional Diagnosis :</span></div>
    <div style={{position: 'absolute', left: '325.51px', top: '423.61px'}} className="cls_012"><span className="cls_012">ii) </span><span className="cls_008">Procedure 2 :</span></div>
    <div style={{position: 'absolute', left: '63.26px', top: '450.03px'}} className="cls_012"><span className="cls_012">iii) </span><span className="cls_008">Co-morbidities :</span></div>
    <div style={{position: 'absolute', left: '325.51px', top: '450.03px'}} className="cls_012"><span className="cls_012">iii) </span><span className="cls_008">Procedure 3 :</span></div>
    <div style={{position: 'absolute', left: '63.26px', top: '476.55px'}} className="cls_012"><span className="cls_012">iv) </span><span className="cls_008">Co-morbidities :</span></div>
    <div style={{position: 'absolute', left: '325.51px', top: '476.55px'}} className="cls_012"><span className="cls_012">iv) </span><span className="cls_008">Details of Procedure :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '503.79px'}} className="cls_012"><span className="cls_012">c) </span><span className="cls_008">Present ailment is a complication of PED?</span></div>
    <div style={{position: 'absolute', left: '213.65px', top: '504.51px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '245.45px', top: '503.79px'}} className="cls_016"><span className="cls_016">No</span><span className="cls_004"> </span><span className="cls_008">  i) (If Yes, Specify Details) :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '519.51px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_008">Pre-authorization obtained :</span></div>
    <div style={{position: 'absolute', left: '213.77px', top: '520.23px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '245.57px', top: '519.51px'}} className="cls_016"><span className="cls_016">No</span><span className="cls_004"> </span><span className="cls_012">  e) </span><span className="cls_008">Pre-authorization Number :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '537.63px'}} className="cls_012"><span className="cls_012">f) </span><span className="cls_008">If authorization by network hospital not obtained, give reason :</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '553.71px'}} className="cls_012"><span className="cls_012">g) </span><span className="cls_008">Hospitalization due to Injury :</span></div>
    <div style={{position: 'absolute', left: '170.42px', top: '554.43px'}} className="cls_008"><span className="cls_008">Yes</span></div>
    <div style={{position: 'absolute', left: '198.65px', top: '553.71px'}} className="cls_016"><span className="cls_016">No</span><span className="cls_004"> </span><span className="cls_012">   i) </span><span className="cls_008">(If Yes, give cause)</span></div>
    <div style={{position: 'absolute', left: '300.43px', top: '553.98px'}} className="cls_016"><span className="cls_016">Self-inflicted</span></div>
    <div style={{position: 'absolute', left: '361.63px', top: '553.23px'}} className="cls_008"><span className="cls_008">Road Traffic Accident</span></div>
    <div style={{position: 'absolute', left: '449.74px', top: '553.23px'}} className="cls_008"><span className="cls_008">Substance abuse/ alcohol consumption</span></div>
    <div style={{position: 'absolute', left: '56.88px', top: '566.67px'}} className="cls_012"><span className="cls_012">i) </span><span className="cls_008">If injury due to substance abuse/ alcohol consumption, Test Conducted to establish this :</span><span className="cls_004"> </span><span className="cls_008">   Yes </span><span className="cls_016">   No</span></div>
    <div style={{position: 'absolute', left: '381.79px', top: '566.67px'}} className="cls_008"><span className="cls_008">(If Yes, Attach Report)</span></div>
    <div style={{position: 'absolute', left: '463.42px', top: '566.67px'}} className="cls_008"><span className="cls_008">iii) If Medico Legal :</span></div>
    <div style={{position: 'absolute', left: '537.00px', top: '567.39px'}} className="cls_008"><span className="cls_008">Yes     No</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '582.39px'}} className="cls_008"><span className="cls_008">v) FIR no :</span></div>
    <div style={{position: 'absolute', left: '216.53px', top: '582.39px'}} className="cls_008"><span className="cls_008">vi) If not reported to police give reason:</span></div>
    <div style={{position: 'absolute', left: '232.97px', top: '610.95px'}} className="cls_026"><span className="cls_026">CLAIM DOCUMENTS SUBMITTED - CHECK LIST</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '629.70px'}} className="cls_008"><span className="cls_008">Claim From Duly Singed</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '629.70px'}} className="cls_008"><span className="cls_008">Investigation report</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '650.70px'}} className="cls_008"><span className="cls_008">Original Pre-authorization request</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '650.70px'}} className="cls_008"><span className="cls_008">CT/MR/USG/HPE investigation report</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '671.70px'}} className="cls_008"><span className="cls_008">Copy of Pre-authorization Approval latter</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '671.70px'}} className="cls_008"><span className="cls_008">Doctor’s reference slip for investigation</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '692.82px'}} className="cls_008"><span className="cls_008">Copy of photo ID card of patient verified by hospital</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '692.82px'}} className="cls_008"><span className="cls_008">ECG</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '713.70px'}} className="cls_008"><span className="cls_008">Hospital Discharge summary</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '713.70px'}} className="cls_008"><span className="cls_008">Pharmacy bills</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '734.82px'}} className="cls_008"><span className="cls_008">Operation Theater notes</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '734.82px'}} className="cls_008"><span className="cls_008">MLC report &amp; Police FIR</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '755.70px'}} className="cls_008"><span className="cls_008">Hospital main bill</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '755.70px'}} className="cls_008"><span className="cls_008">Original death summary from hospital where applicable</span></div>
    <div style={{position: 'absolute', left: '65.30px', top: '776.58px'}} className="cls_008"><span className="cls_008">Hospital break-up bill</span></div>
    <div style={{position: 'absolute', left: '399.91px', top: '776.58px'}} className="cls_008"><span className="cls_008">Any other, please specify</span></div>
    <div style={{position: 'absolute', left: '451.30px', top: '803.36px'}} className="cls_008"><span className="cls_008">(IMPORTANT : PLEASE TURN OVER)</span></div>
  </div>
  <div style={{position: 'absolute', left: '50%', marginLeft: '-297px', top: '2556px', width: '595px', height: '842px', borderStyle: 'outset', overflow: 'hidden'}}>
    <div style={{position: 'absolute', left: '0px', top: '0px'}}>
    <img src={background4} width={595} height={842} />
      </div>
    <div style={{position: 'absolute', left: '231.17px', top: '64.40px'}} className="cls_026"><span className="cls_026">DETAILS IN CASE OF NON NETWORK HOSPITAL</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '82.78px'}} className="cls_008"><span className="cls_008">a) Address of Hospital :</span></div>
    <div style={{position: 'absolute', left: '64.58px', top: '113.86px'}} className="cls_008"><span className="cls_008">City :</span></div>
    <div style={{position: 'absolute', left: '320.11px', top: '114.34px'}} className="cls_008"><span className="cls_008">State :</span></div>
    <div style={{position: 'absolute', left: '64.34px', top: '129.82px'}} className="cls_008"><span className="cls_008">Pin Code :</span></div>
    <div style={{position: 'absolute', left: '207.29px', top: '129.34px'}} className="cls_008"><span className="cls_008">b) Phone No :</span></div>
    <div style={{position: 'absolute', left: '376.15px', top: '129.34px'}} className="cls_008"><span className="cls_008">c) Registration No :</span></div>
    <div style={{position: 'absolute', left: '57.96px', top: '144.70px'}} className="cls_012"><span className="cls_012">d) </span><span className="cls_016">PAN</span></div>
    <div style={{position: 'absolute', left: '204.65px', top: '144.70px'}} className="cls_012"><span className="cls_012">e) </span><span className="cls_008">Number of Inpatient beds :</span></div>
    <div style={{position: 'absolute', left: '335.47px', top: '144.70px'}} className="cls_012"><span className="cls_012">f) </span><span className="cls_008">Facilities available in the hospital :i) OT :</span><span className="cls_004"> </span><span className="cls_008">   Yes      No ii) ICU :</span><span className="cls_004"> </span><span className="cls_008">  Yes     No</span></div>
    <div style={{position: 'absolute', left: '57.24px', top: '160.06px'}} className="cls_008"><span className="cls_008">iii) Other :</span></div>
    <div style={{position: 'absolute', left: '257.45px', top: '195.22px'}} className="cls_026"><span className="cls_026">DECLARATION BY THE INSURED</span></div>
    <div style={{position: 'absolute', left: '454.66px', top: '211.42px'}} className="cls_008"><span className="cls_008">(PLEASE READ VERY CAREFULLY)</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '223.30px'}} className="cls_008"><span className="cls_008">I hereby declare that the information furnished in this claim form is true &amp; correct to the best of my knowledge and belief. If I have made any false or untrue statement,</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '232.78px'}} className="cls_008"><span className="cls_008">suppression or concealment of any material fact, my right to claim reimbursement shall be forfeited. I also consent &amp; authorize TPA/ insurance company, to seek necessary</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '242.14px'}} className="cls_008"><span className="cls_008">medical information / documents from any hospital / Medical Practitioner who has attended on the person against whom this claim is made. I hereby declare that I have</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '251.50px'}} className="cls_008"><span className="cls_008">included all the bills / receipts for the purpose of this claim &amp; that I will not be making any supplementary claim except the pre/post-hospitalization claim, if any.</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '294.49px'}} className="cls_008"><span className="cls_008">Date :</span></div>
    <div style={{position: 'absolute', left: '88.10px', top: '294.73px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '99.98px', top: '294.73px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '111.02px', top: '294.25px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '122.90px', top: '294.25px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '135.62px', top: '293.41px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '147.38px', top: '293.41px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '212.81px', top: '294.49px'}} className="cls_008"><span className="cls_008">Place :</span></div>
    <div style={{position: 'absolute', left: '352.03px', top: '296.53px'}} className="cls_008"><span className="cls_008">Signature of the insured</span></div>
    <div style={{position: 'absolute', left: '255.77px', top: '329.29px'}} className="cls_026"><span className="cls_026">DECLARATION BY THE HOSPITAL</span></div>
    <div style={{position: 'absolute', left: '454.66px', top: '345.25px'}} className="cls_008"><span className="cls_008">(PLEASE READ VERY CAREFULLY)</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '357.13px'}} className="cls_008"><span className="cls_008">We hereby declare that the information furnished in this Claim Form is true &amp; correct to the best of our my knowledge and belief. If we have made any false or untrue</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '366.61px'}} className="cls_008"><span className="cls_008">statement, suppression or concealment of any material fact, our right to claim under this claim shall be forfeited. The signature of the insured is taken on this form after Claim</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '375.97px'}} className="cls_008"><span className="cls_008">Form B is fully filled up by us.</span></div>
    <div style={{position: 'absolute', left: '57.60px', top: '396.73px'}} className="cls_008"><span className="cls_008">Date :</span></div>
    <div style={{position: 'absolute', left: '88.10px', top: '396.97px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '99.98px', top: '396.97px'}} className="cls_022"><span className="cls_022">d</span></div>
    <div style={{position: 'absolute', left: '111.02px', top: '396.49px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '122.90px', top: '396.49px'}} className="cls_022"><span className="cls_022">m</span></div>
    <div style={{position: 'absolute', left: '135.62px', top: '395.65px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '147.38px', top: '395.65px'}} className="cls_018"><span className="cls_018">y</span></div>
    <div style={{position: 'absolute', left: '57.72px', top: '414.37px'}} className="cls_008"><span className="cls_008">Place :</span></div>
    <div style={{position: 'absolute', left: '292.25px', top: '416.41px'}} className="cls_008"><span className="cls_008">Signature and Seal of the hospital Authority</span></div>
  </div>
</div>

     
    </div>
  );
}

export default App;
