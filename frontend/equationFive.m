function fPrime = equationFive(f,x)
    h = .001;
    fPrime = (1/(2*h))*(f(x+h)-f(x-h))
endfunction