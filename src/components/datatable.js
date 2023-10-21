import React, { Component, Fragment } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export class Datatable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkedValues: [],
      myData: this.props.myData,
      loading: false,
      pageSize: this.props.pageSize,
    }
  }

  componentDidUpdate(prevProps) {
    const { myData } = this.props
    const { myData: previousData } = prevProps
    if (myData.length !== previousData.length) {
      this.setState({
        myData,
        loading: false,
        pageSize: myData.length,
      })
      if (myData.length < previousData.length) {
        toast.success('Successfully Deleted Spot!')
      }
    }
  }

  selectRow = (e, i) => {
    if (!e.target.checked) {
      this.setState({
        checkedValues: this.state.checkedValues.filter((item, j) => i !== item),
      })
    } else {
      this.state.checkedValues.push(i)
      this.setState({
        checkedValues: this.state.checkedValues,
      })
    }
  }

  handleRemoveRow = () => {
    this.setState({
      loading: true,
    })
    const selectedValues = this.state.checkedValues
    this.props.onDelete(selectedValues)
  }

  renderEditable = (cellInfo) => {
    const { myData } = this.state
    if (myData[cellInfo.index]) {
      return (
        <div
          style={{ backgroundColor: '#fafafa' }}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => {
            const data = [...myData]
            data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML
            this.setState({ myData: data })
          }}
          dangerouslySetInnerHTML={{
            __html: myData[cellInfo.index][cellInfo.column.id],
          }}
        />
      )
    }
    return null
  }

  renderComponent = (cellInfo) => {
    const { myData } = this.state
    if (myData[cellInfo.index]) {
      return <>{myData[cellInfo.index][cellInfo.column.id]}</>
    }
    return null
  }

  Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  render() {
    const { myClass, multiSelectOption, pagination } = this.props
    const { myData, pageSize } = this.state

    const columns = []
    for (var key in myData[0]) {
      let editable = this.renderEditable
      if (key === 'image') {
        editable = null
      }
      if (key === 'status') {
        editable = null
      }
      if (key === 'avtar') {
        editable = null
      }
      if (key === 'vendor') {
        editable = null
      }
      if (key === 'skill') {
        editable = null
      }
      if (key === 'user') {
        editable = null
      }
      if (React.isValidElement(myData[0][key])) {
        editable = this.renderComponent
      }
      if (key !== 'id') {
        columns.push({
          Header: <b>{this.Capitalize(key.toString())}</b>,
          accessor: key,
          Cell: editable,
          style: {
            textAlign: 'center',
          },
        })
      }
    }

    if (multiSelectOption === true) {
      if (myData.length) {
        columns.push({
          Header: (
            <button
              className="btn btn-danger btn-sm btn-delete mb-0 b-r-4"
              disabled={this.state.loading}
              onClick={(e) => {
                if (
                  window.confirm('Are you sure you wish to delete this item?')
                )
                  this.handleRemoveRow()
              }}
            >
              {this.state.loading ? '...' : 'Delete'}
            </button>
          ),
          id: 'delete',
          accessor: (str) => 'delete',
          sortable: false,
          style: {
            textAlign: 'center',
          },
          Cell: (row) => {
            return (
              <div>
                <span>
                  <input
                    type="checkbox"
                    name={row.original.id}
                    checked={this.state.checkedValues.includes(row.original.id)}
                    onChange={(e) => this.selectRow(e, row.original.id)}
                  />
                </span>
              </div>
            )
          },
        })
      }
    } else {
      columns.push({
        Header: <b>Action</b>,
        id: 'delete',
        accessor: (str) => 'delete',
        Cell: (row) => (
          <div>
            <span
              onClick={() => {
                if (
                  window.confirm('Are you sure you wish to delete this item?')
                ) {
                  let data = myData
                  data.splice(row.index, 1)
                  this.setState({ myData: data })
                }
                toast.success('Successfully Deleted !')
              }}
            >
              <i
                className="fa fa-trash"
                style={{
                  width: 35,
                  fontSize: 16,
                  padding: 11,
                  color: '#e4566e',
                }}
              ></i>
            </span>

            <span>
              <i
                className="fa fa-pencil"
                style={{
                  width: 35,
                  fontSize: 16,
                  padding: 11,
                  color: 'rgb(40, 167, 69)',
                }}
              ></i>
            </span>
          </div>
        ),
        style: {
          textAlign: 'center',
        },
        sortable: false,
      })
    }

    return (
      <Fragment>
        <ReactTable
          data={myData}
          columns={columns}
          defaultPageSize={pageSize}
          className={myClass}
          showPagination={pagination}
          noDataText="No spots right now, head to Slack and add some with `/foople add`"
        />
        <ToastContainer />
      </Fragment>
    )
  }
}

export default Datatable
