import React, { useState, useEffect } from 'react'
import styles from './DataTable.style'
import MaterialTable from "material-table";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TablePagination from "@material-ui/core/TablePagination";

const useStyles = makeStyles({
    caption: {
      display: 'none'
    },
    root: {
        borderBottom: 'none',
        
    },
});

const DataTable = (props) => {

	useEffect(() => {
		console.log('asdasdasdsd')
		console.log(props.data)
		console.log('fgdfgdfgdfgdf')
	}, [])
    
    const classes = useStyles();

    return (
		<div style={styles().containerTable}>
			<MaterialTable
				components={{
					Pagination: props => (
						<TablePagination
							{...props}
							backIconButtonProps={{
								"aria-label": "Previous Page"
							}}
							nextIconButtonProps={{
								"aria-label": "Next Page"
							}}
							labelRowsPerPage="Reihen pro Seite:"
								classes={{
									caption: classes.caption,
									root: classes.root,
									}}
								SelectProps={{
							}}                    
						/>
					),
				}}
				style={styles().table}
				columns={[
					{ title: '#', field: 'id' },
					{ title: 'First Name', field: 'first_name' },
					{ title: 'Last Name', field: 'last_name' },
					{ title: 'Email Address', field: 'email_address' },
					{ title: 'Contact Number', field: 'contact_number', type: 'numeric' },
					{ title: 'User Status', field: 'user_status', type: 'numeric' },
					
					// {
					// title: 'Birth Place',
					// field: 'birthCity',
					// lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
					// },
				]}
				data={props.data ? props.data : null}
				options={{
					rowStyle: styles().tableRow,
					headerStyle: styles().tableHeader,
					cellStyle: styles().tableCell,
					paginationType: 'stepped',
					showTitle: false,
					search: false,
					toolbar: false
				}}
			/>
		</div>
    )
}

export default DataTable