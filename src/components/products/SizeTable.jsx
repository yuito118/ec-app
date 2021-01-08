import React from 'react';
import {makeStyles} from "@material-ui/styles";
import TableContainer from '@material-ui/core/TableContainer';
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";

import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(() => ({
  iconCell: {
    height: 48,
    width: 48,
    padding: 0
  }
}));

const SizeTable = (props) => {
  const classes = useStyles();

  const sizes = props.sizes;

  return(
    <TableContainer>
      <Table>
        <TableBody>
          {sizes.length > 0 && (
            sizes.map(size => (
              <TableRow key={size.size}>
                <TableCell component={"th"} scope="row">
                  {size.size}
                </TableCell>
                <TableCell>
                  残り{size.quantity}点
                </TableCell>
                <TableCell>
                  {size.quantity > 0 ? (
                    <IconButton>
                      <ShoppingCartIcon />
                    </IconButton>
                  ) : (
                    <div>売り切れ</div>
                  )}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
          ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SizeTable