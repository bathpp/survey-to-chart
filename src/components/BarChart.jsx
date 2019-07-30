import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';
import DataSet from '@antv/data-set';
import { CATEGORY } from '../asset/data';
import { buildChartData } from './utils';

const categories = Object.values(CATEGORY).map(item => item.DESC);

function Stackedcolumn(props) {
  const data = buildChartData(props.data);
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: categories,
    key: 'Category',
    value: 'Count'
  });

  return (
    <div>
      <Chart height={400} data={dv} forceFit>
        <Legend />
        <Axis name="Category" />
        <Axis name="Count" />
        <Tooltip />
        <Geom
          type="intervalStack"
          position="Category*Count"
          color="name"
          style={{
            stroke: '#fff',
            lineWidth: 1
          }}
        />
      </Chart>
    </div>
  );
}

export default Stackedcolumn;
