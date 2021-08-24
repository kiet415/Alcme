import React from 'react';
import { Chart } from "react-google-charts";
class IngredientShow extends React.Component {

  componentDidMount() {
    this.props.fetchIngredient(this.props.match.params.id)
  }
  render() {
    const { ingredient } = this.props
    if(!ingredient) return null;
    return (
      <div className="ingredient-show-page">
            <div id="ing-show-frame">

            <div id="ing-show-back">
            <img src={`https://spoonacular.com/cdn/ingredients_500x500/${this.props.ingredient.image}`} />
            </div>
            </div>
        <h1 className="ingredient-title">
          {this.props.ingredient.name}
        </h1>
        <div className="ingredient-show-container">
            <ul className="ingredient-nutrition">
                <h3>Nutrition</h3>
                  {
                  this.props.ingredient.nutrition.nutrients
                  .map( nutrient => {
                    if (
                      'Phosphorus Copper Selenium Folate Manganese Magnesium'
                        .includes(nutrient.title)
                      ) return null
                    return (
                      <li>
                        {nutrient.name} : {nutrient.amount}{nutrient.unit}
                      </li>
                        )
                      })
                  }
            </ul>
            <div>
            <h3 id="chart-title">Caloric Breakdown</h3>
            <div className="ingredient-pie-chart"> 
                <Chart 
                    width={'600px'}
                    height={'600px'}
                    chartType="PieChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Caloric Breakdown', 'Recommened Daily Serving'],
                      ['Protein', this.props.ingredient.nutrition.caloricBreakdown.percentProtein],
                      ['Fat', this.props.ingredient.nutrition.caloricBreakdown.percentFat],
                      ['Carbs', this.props.ingredient.nutrition.caloricBreakdown.percentCarbs]
                    ]}
                    options={{
                      // title: 'Caloric Breakdown',
                      // Just add this option
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                    />      
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default IngredientShow;