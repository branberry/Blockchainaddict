function [fPrime] = octavebullshit(f,x)
    h = .001;
    fPrime = (1/(2*h))*(f(x+h)-f(x-h)) - (1/(12*h))*(f(x+2*h) - 2*(f(x+h)-f(x-h))-f(x-2*h));
endfunction