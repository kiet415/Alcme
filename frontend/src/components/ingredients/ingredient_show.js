import React from 'react';
import { Chart } from "react-google-charts";
class IngredientIndex extends React.Component {

  render() {
    return (
      <div className="ingredient-show-page">
        <h1 className="ingredient-title">Ingredient title here</h1>
        <div className="ingredient-show-container">
            
            <ul className="ingredient-nutrition">
                <h3>Nutrition</h3>
                <li>Calories : 120 cal </li>
                <li>Fats : 2g </li>
                <li>Carbs : 14g </li>
                <li>Protein : 2g </li>
                <li></li>
            </ul>
            <div className="ingredient-pie-chart"> 
                <Chart
                    width={'1000px'}
                    height={'800px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Caloric Breakdown', 'Recommened Daily Serving'],
                        ['Protein', 2],
                        ['Fat', 2],
                        ['Carbs', 14],
                        
                    ]}
                    options={{
                        title: 'Caloric Breakdown',
                        // Just add this option
                        is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                />      
            </div>
        </div>
        
      </div>
    );
  }
}

export default IngredientIndex;