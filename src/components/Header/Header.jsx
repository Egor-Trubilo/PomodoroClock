import React, {useCallback} from 'react';
import Button from "./Button";
import styled from "styled-components";
import Logo from "../../UI/Logo";
import {Link} from "react-router-dom";

import AddchartOutlinedIcon from '@mui/icons-material/AddchartOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const HeaderContainer = styled.header`
  display: flex;
  padding: 0 0.75rem;
  max-width: 38.75rem;
  //margin: auto;
  width: 100%;
  align-items: center;
  text-align: center;

  .content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3.75rem;
  }

  .nav {
    display: flex;
    gap: 0.625rem;
    align-items: center;
  }

  .label {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }

  .description {
    padding-left: 0.4rem;
  }


`


const Header = () => {


    return (
        <HeaderContainer>
            <div className='content'>
                <Logo/>
                <ul className='nav'>
                    <li>
                        <Link to='/'>
                            <Button>
                                <span className='label'>
                                    <AddchartOutlinedIcon/>
                                </span>
                                <span className='description'>
                                    Report
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button>
                                <span className='label'>
                                    <SettingsOutlinedIcon/>
                                </span>

                                <span className='description'>
                                    Setting
                                </span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to='/'>
                            <Button>
                                <span className='label'>
                                    <AccountCircleIcon/>
                                </span>
                                <span className='description'>
                                        Login
                                    </span>

                            </Button>
                        </Link>
                    </li>

                </ul>

            </div>

        </HeaderContainer>
    );
};

export default Header;