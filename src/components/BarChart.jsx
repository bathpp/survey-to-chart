import React from 'react';
import { Chart, Geom, Axis, Tooltip, Legend, Label } from 'bizcharts';
import DataSet from '@antv/data-set';
import { CATEGORY } from '../asset/data';

const categories = Object.values(CATEGORY).map(item => item.DESC);

function Stackedcolumn(props) {
  const ds = new DataSet();
  const dv = ds.createView().source(props.data);
  dv.transform({
    type: 'fold',
    fields: categories,
    key: 'Category',
    value: 'Count'
  });

  return (
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
      >
        <Label
          content="Count"
          position="bottom"
          textStyle={{
            fontSize: '12',
            fontWeight: 'bold'
          }}
        />
      </Geom>
    </Chart>
  );
}

export default Stackedcolumn;
