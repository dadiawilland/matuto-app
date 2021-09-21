import React from 'react'
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

const DataTable = () => {
    
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
					{ title: 'Name', field: 'name' },
					{ title: 'Surname', field: 'surname' },
					{ title: 'Birth Year', field: 'birthYear', type: 'numeric' },
					{
					title: 'Birth Place',
					field: 'birthCity',
					lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
					},
				]}
				data={[
					// { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
					{ name: '5125', surname: 'Baran', birthYear: 2017, birthCity: 34 },
					{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
					{ name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
					{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
					{ name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
					{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
					{ name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
					{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
					{ name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
					
				]}
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