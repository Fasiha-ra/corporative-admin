import styled from "styled-components";
export const MainLayoutSection = styled.div`

    position: relative;
    
    .mainHeader{
        background-color: $primary_white;
        /* padding: 10px 30px 5px; */
        margin-bottom: 20px;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 99;
        border-bottom: 1px solid $primary_grey_border;
        @include mediaQueryScreen(desktopXX){
            padding: 1.1vw 2vw 1vw;
        }
        @include mediaQueryScreen(phoneX){
            padding: 20px 10px 10px;
        }
    }
   
    .mainSidebarContent{
        
        .mainSidebar{
            width: 240px;
            border-radius: 0 26px 26px 0;
            box-shadow: 0 0 6px 0 #0000001C;
            overflow: hidden;
            background-color: $primary_white;
            padding: 0 ;
            z-index: 9;
            position: fixed;
            top: 88px;
            height: calc(100vh - 89px);
            padding-top: 30px;
            transition: all .1s ease;
            @include mediaQueryScreen(tabletX){
                width: 0;
            }
        }
        .openSideBar{
            width: 240px !important;
            position: fixed;
            z-index: 99999;
        }
        .closeSideBar{
            @include mediaQueryScreen(tabletX){
            width: 0!important;
        }
        }
        .mainContent{
            padding: 20px 40px;
            margin-left: 240px;
            margin-top: 88px;
            transition: all .1s ease;
            @include mediaQueryScreen(tabletX){
                margin-left: 0 !important;
            }
            @include mediaQueryScreen(phoneX){
                margin-top: 65px;
                padding: 20px 15px;
              }
        }
    }
    .remMar{
        margin-left: 62px !important;
    }

.slideOff{
    width: 62px !important;
}
`;