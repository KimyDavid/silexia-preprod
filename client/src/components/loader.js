import React, {  } from 'react';

const Client = () => {

    const css = `#ht-preloader { background: #ffffff; bottom: 0; height: 100%; left: 0; overflow: hidden !important; position: fixed; right: 0; text-align: center; top: 0; width: 100%; z-index: 99999; }
    .clear-loader { transform: translateX(-50%) translateY(-50%); -webkit-transform: translateX(-50%) translateY(-50%); -o-transform: translateX(-50%) translateY(-50%); -ms-transform: translateX(-50%) translateY(-50%); -moz-transform: translateX(-50%) translateY(-50%); z-index: 999; box-sizing: border-box; display: inline-block; left: 50%; position: absolute; text-align: center; top: 50%; }
    .loader { position: absolute; top: 50%; left: 50%; margin: auto; text-align: center; transform: translateX(-50%) translateY(-50%); -webkit-transform: translateX(-50%) translateY(-50%); -o-transform: translateX(-50%) translateY(-50%); -ms-transform: translateX(-50%) translateY(-50%); -moz-transform: translateX(-50%) translateY(-50%);}
    .loader span { width: 20px; height: 20px; background-color: #546c5c; border-radius: 50%; display: inline-block; animation: motion 3s ease-in-out infinite; }
    .loader p { color: #dd3e3e; margin-top: 5px; font-size: 30px; animation: shake 5s ease-in-out infinite; }
    @keyframes motion{
      0%{
        transform: translateX(0) scale(1);
        }
      25%{
        transform: translateX(-50px) scale(0.3);
        }
      50%{
        transform: translateX(0) scale(1);
        }
      75%{
        transform: translateX(50px) scale(0.3);
        }
      100%{
        transform: translateX(0) scale(1);
        }
    }@keyframes shake {
        from, to {
          transform: translate3d(0, 0, 0);
        }
      
        10%, 30%, 50%, 70%, 90% {
          transform: translate3d(-10px, 0, 0);
        }
      
        20%, 40%, 60%, 80% {
          transform: translate3d(10px, 0, 0);
        }
      }`;
    
    return (
        <>
            <style>
                { css }
            </style>
            <div id="ht-preloader">
                <div className="loader clear-loader">
                    <span />
                    <p>Silexia</p>
                </div>
            </div>
        </>
    );
}

export default Client;