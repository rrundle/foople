import React from 'react'
import Datatable from '../datatable'
import SvgSpinner from '../svg-spinner'

const DataTableComponent = ({ loading, data = [], onDelete }) => {
  return loading ? (
    <SvgSpinner show />
  ) : (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header">
              <h5>Food Spots</h5>
            </div>
            <div className="card-body datatable-react">
              <Datatable
                onDelete={onDelete}
                multiSelectOption
                myData={data}
                pageSize={data.length}
                pagination={false}
                class="-striped -highlight"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataTableComponent
