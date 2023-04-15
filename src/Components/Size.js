import React from 'react'
import { useParams } from 'react-router-dom';
import "./Size.css"
import Header from './Layout/Header'
import Footer from './Footer'
import FAQSection from './FaqSection'
import { useEffect } from 'react';
const Size = () => {

    const params = useParams();

    // console.log(params.page);

    useEffect(() => {

        let tab = document.querySelectorAll('.size-table-heading')
        let tabContainer = document.querySelector('.size-table-heading-container')

        tabContainer.addEventListener('click', function (e) {
            let click = e.target.closest('.size-table-heading');
            // console.log(click)
            if (!click) return

            tab.forEach((t) => {
                t.classList.remove('tab-h_acitve')
            })
            click.classList.add('tab-h_acitve')

            //////////////////////////////////////// active table body//////////////////////////////
            let tableBody = document.querySelectorAll('.size-table-column-main_container')
            // console.log(click.dataset.tab)
            tableBody.forEach(body => body.classList.remove('table-body-active'))
            document.querySelector(`.table-body--${click.dataset.tab}`).classList.add('table-body-active')

        })

    }, [])


    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="row" style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#ebf5f9", padding: "40px 0px " }}>
                    <h1 className='shop-by-filter-size-h' style={{ textAlign: 'center' }}>Shop by Size </h1>

                </div>
            </div>

            {/* /////////////////////////////// */}

            <div className="container-fluid">
                <div className="row">
                    <div className='col-xl-11 size-table-heading-main_container'>
                        <div className='row size-table-heading-container'>
                            <div className='size-table-heading  size-table-heading-first tab-h_acitve' data-tab="1"> <h2>1"<span>Air Filter</span> </h2></div>
                            <div className='size-table-heading' data-tab="2"> <h2> 2"<span>Air Filter</span> </h2> </div>
                            <div className='size-table-heading' data-tab="3"> <h2> 4"<span>Air Filter</span> </h2> </div>
                            <div className='size-table-heading' data-tab="4"> <h2> 5"<span>Air Filter</span></h2>  </div>
                            <div className='size-table-heading size-table-heading-last' data-tab="5"><h2><span>Shop By </span>Brands</h2></div>
                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-xl-11 size-table-column-main_container table-body--1 table-body-active'>
                        <div className='row size-table-column-container'>
                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x3</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                </ul>
                            </div>


                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                    <li className='li-bg-color'>8x14x1</li>
                                    <li>8x14x1</li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-xl-11 size-table-column-main_container table-body--2 '>
                        <div className='row size-table-column-container'>
                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                </ul>
                            </div>


                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 1</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                    <li className='li-bg-color'>8x14x2</li>
                                    <li>8x14x2</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-xl-11 size-table-column-main_container table-body--3 '>
                        <div className='row size-table-column-container'>
                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                </ul>
                            </div>


                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                    <li className='li-bg-color'>8x14x4</li>
                                    <li>8x14x4</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className='col-xl-11 size-table-column-main_container table-body--4 '>
                        <div className='row size-table-column-container'>
                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                </ul>
                            </div>


                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                                <ul>
                                    <li className='li-bg-color'>6 7/8 x 15 7/8 x 5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                    <li className='li-bg-color'>8x14x5</li>
                                    <li>8x14x5</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

                      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                      <div className='col-xl-11 size-table-column-main_container table-body--5 '>
                        <div className='row size-table-column-container'>
                            <div className='table-column'>        
                                <ul>
                                    <li className='li-bg-color'>Skuttle</li>
                                    <li>Honeywell</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                            <ul>
                                    <li className='li-bg-color'>Skuttle</li>
                                    <li>Honeywell</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                            <ul>
                                    <li className='li-bg-color'>Skuttle</li>
                                    <li>Honeywell</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                </ul>
                            </div>


                            <div className='table-column'>
                            <ul>
                                    <li className='li-bg-color'>Skuttle</li>
                                    <li>Honeywell</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                </ul>
                            </div>

                            <div className='table-column'>
                            <ul>
                                    <li className='li-bg-color'>Skuttle</li>
                                    <li>Honeywell</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                    <li className='li-bg-color'>Coleman</li>
                                    <li>Coleman</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

                </div>
            </div>





















































            {/* //////////////////////////////////// */}

            {/* ///////////////////////////////////////////////////// table ???????????///////////////////////////  */}

            {/* <div className="container-fluid">
                <div className="row" >
                    <div className='col-xl-11 table-main-container' style={{ margin: "80px auto" }}>
                        <table className="table table-striped" style={{ borderRadius: '20px!important' }}> */}
            {/* <thead style={{ borderBottom: "solid 4px #5c98ce", backgroundColor: '#e2e2e298' }}>
                                <tr className='tab-container'>
                                    <th scope="col" className='th-container tab_acitve'  data-tab="1" style={{  borderRadius: "10px 0px 0px 0px" }}><h2>1"<span>Air Filter</span></h2> </th>
                                    <th scope="col" className='th-container'  data-tab="2"><h2>2"<span>Air Filter</span> </h2></th>
                                    <th scope="col" className='th-container'  data-tab="3"><h2>4"<span>Air Filter</span> </h2> </th>
                                    <th scope="col" className='th-container'  data-tab="4"><h2>5"<span>Air Filter</span></h2> </th>
                                    <th scope="col" className='th-container'  data-tab="5" style={{ borderRadius: "0px 10px 0px 0px" }}><h2><span>Shop By </span>Brands</h2> </th>
                                </tr>
                            </thead> */}
            {/* <tbody className='table-body table-body--1 table-body-active '>
                                <tr className='td-container'>

                                    <td>6 7/8 x 15 7/8 x 1</td>
                                    <td>6 7/8 x 15 7/8 x 1</td>
                                    <td>6 7/8 x 15 7/8 x 1</td>
                                    <td>6 7/8 x 15 7/8 x 1</td>
                                    <td>6 7/8 x 15 7/8 x 1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                    <td>8x14x1</td>
                                </tr>
                            </tbody> */}

            {/* //////////////////////////////////////////////////////////// */}

            {/* <tbody className='table-body table-body--2 '>
                                <tr className='td-container'>

                                    <td>6 7/8 x 15 7/8 x 2</td>
                                    <td>6 7/8 x 15 7/8 x 2</td>
                                    <td>6 7/8 x 15 7/8 x 2</td>
                                    <td>6 7/8 x 15 7/8 x 2</td>
                                    <td>6 7/8 x 15 7/8 x 2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr><tr className='td-container'>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                    <td>8x14x2</td>
                                </tr>
                            

                            </tbody> */}



            {/* //////////////////////////////////////////////////////////// */}

            {/* <tbody className='table-body table-body--3 '>
                                <tr className='td-container'>

                                    <td>6 7/8 x 15 7/8 x 4</td>
                                    <td>6 7/8 x 15 7/8 x 4</td>
                                    <td>6 7/8 x 15 7/8 x 4</td>
                                    <td>6 7/8 x 15 7/8 x 4</td>
                                    <td>6 7/8 x 15 7/8 x 4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                    <td>8x14x4</td>
                                </tr>
                         
                            

                            </tbody> */}


            {/* //////////////////////////////////////////////////////////// */}

            {/* <tbody className='table-body table-body--4 '>
                                <tr className='td-container'>

                                    <td>6 7/8 x 15 7/8 x 5</td>
                                    <td>6 7/8 x 15 7/8 x 5</td>
                                    <td>6 7/8 x 15 7/8 x 5</td>
                                    <td>6 7/8 x 15 7/8 x 5</td>
                                    <td>6 7/8 x 15 7/8 x 5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                    <td>8x14x5</td>
                                </tr>
                         
                            

                            </tbody> */}


            {/* //////////////////////////////////////////////////////////// */}

            {/* <tbody className='table-body table-body--5 '>
                                <tr className='td-container'>

                                    <td>Air Bear</td>
                                    <td>Coleman</td>
                                    <td>Honeywell Filters</td>
                                    <td>Skuttle Media Filters</td>
                                    <td>Coleman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                                <tr className='td-container'>
                                    <td>Bryant</td>
                                    <td>Gibson</td>
                                    <td>Ruud</td>
                                    <td>York</td>
                                    <td>Goodman</td>
                                </tr>
                         
                            

                            </tbody> */}


            {/* 
                        </table>

                    </div>
                </div>
            </div> */}

            {/* ///////////////////////////////////////////////////// table end ???????????///////////////////////////  */}



            {/* ///////////////////////////////////////////////////// faqs ???????????///////////////////////////  */}
           
            <FAQSection />

            {/* ///////////////////////////////////////////////////// faqs end ???????????///////////////////////////  */}


            <Footer />
        </>

    )
}

export default Size