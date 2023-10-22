import { useContext } from 'react';
import { Link, json, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import './addemployee.css';
import axios from 'axios';

const Addemployee = () => {
    const navigate = useNavigate();
    const [emloyeename, setemloyeename] = useState("");
    const [age, setAge] = useState("");
    const [attrition, setAttrition] = useState("");
    const [businessTravel, setBusinessTravel] = useState("");
    const [dailyRate, setDailyRate] = useState("");
    const [department, setDepartment] = useState("");
    const [distanceFromHome, setDistanceFromHome] = useState("");
    const [education, setEducation] = useState("");
    const [educationField, setEducationField] = useState("");
    const [employeeCount, setEmployeeCount] = useState("");
    const [employeeNumber, setEmployeeNumber] = useState("");
    const [environmentSatisfaction, setEnvironmentSatisfaction] = useState("");
    const [gender, setGender] = useState("");
    const [hourlyRate, setHourlyRate] = useState("");
    const [jobInvolvement, setJobInvolvement] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [jobSatisfaction, setJobSatisfaction] = useState("");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [monthlyIncome, setMonthlyIncome] = useState("");
    const [monthlyRate, setMonthlyRate] = useState("");
    const [numCompaniesWorked, setNumCompaniesWorked] = useState("");
    const [over18, setOver18] = useState("");
    const [overTime, setOverTime] = useState("");
    const [percentSalaryHike, setPercentSalaryHike] = useState("");
    const [performanceRating, setPerformanceRating] = useState("");
    const [relationshipSatisfaction, setRelationshipSatisfaction] = useState("");
    const [standardHours, setStandardHours] = useState("");
    const [stockOptionLevel, setStockOptionLevel] = useState("");
    const [totalWorkingYears, setTotalWorkingYears] = useState("");
    const [trainingTimesLastYear, setTrainingTimesLastYear] = useState("");
    const [workLifeBalance, setWorkLifeBalance] = useState("");
    const [yearsAtCompany, setYearsAtCompany] = useState("");
    const [yearsInCurrentRole, setYearsInCurrentRole] = useState("");
    const [yearsSinceLastPromotion, setYearsSinceLastPromotion] = useState("");
    const [yearsWithCurrManager, setYearsWithCurrManager] = useState("");

    const handleInputChange = (ev) => {
        const { value, name } = ev.target;


        if (name === "emloyeename") {
            setemloyeename(value);
        }
        if (name === "age") {
            setAge(value);
        }

        if (name === "businessTravel") {
            setBusinessTravel(value);
        }
        if (name === "dailyRate") {
            setDailyRate(value);
        }
        if (name === "department") {
            setDepartment(value);
        }
        if (name === "distanceFromHome") {
            setDistanceFromHome(value);
        }
        if (name === "education") {
            setEducation(value);
        }
        if (name === "educationField") {
            setEducationField(value);
        }
        if (name === "employeeCount") {
            setEmployeeCount(value);
        }
        if (name === "employeeNumber") {
            setEmployeeNumber(value);
        }
        if (name === "environmentSatisfaction") {
            setEnvironmentSatisfaction(value);
        }
        if (name === "gender") {
            setGender(value);
        }
        if (name === "hourlyRate") {
            setHourlyRate(value);
        }
        if (name === "jobInvolvement") {
            setJobInvolvement(value);
        }
        if (name === "jobLevel") {
            setJobLevel(value);
        }
        if (name === "jobRole") {
            setJobRole(value);
        }
        if (name === "jobSatisfaction") {
            setJobSatisfaction(value);
        }
        if (name === "maritalStatus") {
            setMaritalStatus(value);
        }
        if (name === "monthlyIncome") {
            setMonthlyIncome(value);
        }
        if (name === "monthlyRate") {
            setMonthlyRate(value);
        }
        if (name === "numCompaniesWorked") {
            setNumCompaniesWorked(value);
        }
        if (name === "over18") {
            setOver18(value);
        }
        if (name === "overTime") {
            setOverTime(value);
        }
        if (name === "percentSalaryHike") {
            setPercentSalaryHike(value);
        }
        if (name === "performanceRating") {
            setPerformanceRating(value);
        }
        if (name === "relationshipSatisfaction") {
            setRelationshipSatisfaction(value);
        }
        if (name === "standardHours") {
            setStandardHours(value);
        }
        if (name === "stockOptionLevel") {
            setStockOptionLevel(value);
        }
        if (name === "totalWorkingYears") {
            setTotalWorkingYears(value);
        }
        if (name === "trainingTimesLastYear") {
            setTrainingTimesLastYear(value);
        }
        if (name === "workLifeBalance") {
            setWorkLifeBalance(value);
        }
        if (name === "yearsAtCompany") {
            setYearsAtCompany(value);
        }
        if (name === "yearsInCurrentRole") {
            setYearsInCurrentRole(value);
        }
        if (name === "yearsSinceLastPromotion") {
            setYearsSinceLastPromotion(value);
        }
        if (name === "yearsWithCurrManager") {
            setYearsWithCurrManager(value);
        }
    };

    const Addemployeedata = async () => {




          try {
            const response = await axios.post('http://localhost:8000/addemployee', {
                emloyeename,
                age,
                businessTravel,
                dailyRate,
                department,
                distanceFromHome,
                education,
                educationField,
                employeeCount,
                employeeNumber,

                environmentSatisfaction,
                gender,
                hourlyRate,
                jobInvolvement,
                jobLevel,
                jobRole,
                jobSatisfaction,
                maritalStatus,
                monthlyIncome,
                monthlyRate,
                numCompaniesWorked,
                over18,
                overTime,
                percentSalaryHike,
                performanceRating,
                relationshipSatisfaction,
                standardHours,
                stockOptionLevel,
                totalWorkingYears,
                trainingTimesLastYear,
                workLifeBalance,
                yearsAtCompany,
                yearsSinceLastPromotion,
                yearsWithCurrManager
            });
    
            // Handle the response according to your needs
            if (response.status === 201) {
              console.log('Signup successful');
              alert("Employee successfully registered");
            } else {
              console.log('Employee failed');
            }
          } catch (error) {
            console.error(error);
          }
    
    
    
        
    
    
    
    
    
    
    
    
    
    
      };
    
    
    
    return (
        <>
            <div className='rootcontainer'>
                <h2>Employee</h2>
                <TextField fullWidth value={emloyeename} onChange={handleInputChange} name="emloyeename" label="Employee Name" variant="outlined" />
                <TextField fullWidth value={age} onChange={handleInputChange} name="age" label="Age" variant="outlined" />
                <TextField fullWidth value={businessTravel} onChange={handleInputChange} name="businessTravel" label="Business Travel" variant="outlined" />
                <TextField fullWidth value={dailyRate} onChange={handleInputChange} name="dailyRate" label="Daily Rate" variant="outlined" />
                <TextField fullWidth value={department} onChange={handleInputChange} name="department" label="Department" variant="outlined" />
                <TextField fullWidth value={distanceFromHome} onChange={handleInputChange} name="distanceFromHome" label="Distance From Home" variant="outlined" />
                <TextField fullWidth value={education} onChange={handleInputChange} name="education" label="Education" variant="outlined" />
                <TextField fullWidth value={educationField} onChange={handleInputChange} name="educationField" label="Education Field" variant="outlined" />
                <TextField fullWidth value={employeeCount} onChange={handleInputChange} name="employeeCount" label="Employee Count" variant="outlined" />
                <TextField fullWidth value={employeeNumber} onChange={handleInputChange} name="employeeNumber" label="Employee Number" variant="outlined" />
                <TextField fullWidth value={environmentSatisfaction} onChange={handleInputChange} name="environmentSatisfaction" label="Environment Satisfaction" variant="outlined" />
                <TextField fullWidth value={gender} onChange={handleInputChange} name="gender" label="Gender" variant="outlined" />
                <TextField fullWidth value={hourlyRate} onChange={handleInputChange} name="hourlyRate" label="Hourly Rate" variant="outlined" />
                <TextField fullWidth value={jobInvolvement} onChange={handleInputChange} name="jobInvolvement" label="Job Involvement" variant="outlined" />
                <TextField fullWidth value={jobLevel} onChange={handleInputChange} name="jobLevel" label="Job Level" variant="outlined" />
                <TextField fullWidth value={jobRole} onChange={handleInputChange} name="jobRole" label="Job Role" variant="outlined" />
                <TextField fullWidth value={jobSatisfaction} onChange={handleInputChange} name="jobSatisfaction" label="Job Satisfaction" variant="outlined" />
                <TextField fullWidth value={maritalStatus} onChange={handleInputChange} name="maritalStatus" label="Marital Status" variant="outlined" />
                <TextField fullWidth value={monthlyIncome} onChange={handleInputChange} name="monthlyIncome" label="Monthly Income" variant="outlined" />
                <TextField fullWidth value={monthlyRate} onChange={handleInputChange} name="monthlyRate" label="Monthly Rate" variant="outlined" />
                <TextField fullWidth value={numCompaniesWorked} onChange={handleInputChange} name="numCompaniesWorked" label="Num Companies Worked" variant="outlined" />
                <TextField fullWidth value={over18} onChange={handleInputChange} name="over18" label="Over 18" variant="outlined" />
                <TextField fullWidth value={overTime} onChange={handleInputChange} name="overTime" label="Over Time" variant="outlined" />
                <TextField fullWidth value={percentSalaryHike} onChange={handleInputChange} name="percentSalaryHike" label="Percent Salary Hike" variant="outlined" />
                <TextField fullWidth value={performanceRating} onChange={handleInputChange} name="performanceRating" label="Performance Rating" variant="outlined" />
                <TextField fullWidth value={relationshipSatisfaction} onChange={handleInputChange} name="relationshipSatisfaction" label="Relationship Satisfaction" variant="outlined" />
                <TextField fullWidth value={standardHours} onChange={handleInputChange} name="standardHours" label="Standard Hours" variant="outlined" />
                <TextField fullWidth value={stockOptionLevel} onChange={handleInputChange} name="stockOptionLevel" label="Stock Option Level" variant="outlined" />
                <TextField fullWidth value={totalWorkingYears} onChange={handleInputChange} name="totalWorkingYears" label="Total Working Years" variant="outlined" />
                <TextField fullWidth value={trainingTimesLastYear} onChange={handleInputChange} name="trainingTimesLastYear" label="Training Times Last Year" variant="outlined" />
                <TextField fullWidth value={workLifeBalance} onChange={handleInputChange} name="workLifeBalance" label="Work Life Balance" variant="outlined" />
                <TextField fullWidth value={yearsAtCompany} onChange={handleInputChange} name="yearsAtCompany" label="Years at Company" variant="outlined" />
                <TextField fullWidth value={yearsInCurrentRole} onChange={handleInputChange} name="yearsInCurrentRole" label="Years in Current Role" variant="outlined" />
                <TextField fullWidth value={yearsSinceLastPromotion} onChange={handleInputChange} name="yearsSinceLastPromotion" label="Years Since Last Promotion" variant="outlined" />
                <TextField fullWidth value={yearsWithCurrManager} onChange={handleInputChange} name="yearsWithCurrManager" label="Years with Current Manager" variant="outlined" />
                <Button fullWidth onClick={Addemployeedata} variant="contained">Add Employee</Button>
            </div>
        </>
    );
}

export default Addemployee;
