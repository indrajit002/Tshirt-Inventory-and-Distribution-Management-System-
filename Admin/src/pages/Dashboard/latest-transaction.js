import React from "react"
import { Card, CardBody, Table, CardTitle, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap"
import { Link } from "react-router-dom"

const LatestTransaction = () => {
    return (
        <Col lg={12}>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4">Latest Transaction</CardTitle>
                    <div className="table-responsive">
                        <Table className="table-centered">
                            <thead>
                                <tr>
                                    <th scope="col">Date</th>
                                    <th scope="col">Roll no.</th>
                                    <th scope="col">Student name</th>
                                    <th scope="col">Technology</th>
                                    <th scope="col" colSpan="2">Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>15/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">21P31A1223</Link>
                                    </td>
                                    <td>Ayush Ghimire</td>
                                    <td>DRIVE READY</td>
                                    <td><span className="badge badge-soft-success font-size-12">XL</span>
                                    </td>
                                    <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                </tr>
                                <tr>
                                    <td>22/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">21P31A0537</Link>
                                    </td>
                                    <td>DURGA PRASAD</td>
                                    <td>OWL CODER</td>
                                    <td><span className="badge badge-soft-danger font-size-12">M</span>
                                    </td>
                                    <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                </tr>
                                <tr>
                                    <td>17/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">21A91A0234</Link>
                                    </td>
                                    <td>SAI LOKESH</td>
                                    <td>INTERN</td>
                                    <td><span className="badge badge-soft-success font-size-12">S</span>
                                    </td>
                                    <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                </tr>
                                <tr>
                                    <td>18/01/2020</td>
                                    <td>
                                        <Link to="#" className="text-body fw-medium">21P31A0588</Link>
                                    </td>
                                    <td>INDRAJIT BARMAN</td>
                                    <td>PROJECT SPACE</td>
                                    <td><span className="badge badge-soft-warning font-size-12">XXL</span>
                                    </td>
                                    <td><Link to="#" className="btn btn-primary btn-sm">View</Link></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    {/* <div className="mt-3">
                        <Pagination className="pagination pagination-rounded justify-content-center mb-0">
                            <PaginationItem>
                                <PaginationLink to="#">Previous</PaginationLink>
                            </PaginationItem>
                            <PaginationItem><PaginationLink to="#">1</PaginationLink></PaginationItem>
                            <PaginationItem className="active"><PaginationLink to="#">2</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">3</PaginationLink></PaginationItem>
                            <PaginationItem><PaginationLink to="#">Next</PaginationLink></PaginationItem>
                        </Pagination>
                    </div> */}
                </CardBody>
            </Card>
        </Col>
    )
}

export default LatestTransaction