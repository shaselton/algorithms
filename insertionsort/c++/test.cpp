//
//  test.cpp
//  
//
//  Created by Scott Haselton on 9/6/12.
//  Copyright (c) 2012 California State Long Beach. All rights reserved.
//

#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

using namespace std;

void output( string );

int main (int argc, const char * argv[])
{
    srand( time(NULL) );
    int numb;
    string a[] = {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"};
    for( int i = 0; i < 20; i++ ){
        numb = rand() % 12;
        output( (string)a[numb] );
    }
}

void output( string a ){
    int b = atoi(a.c_str());
    cout << a << ": ";
    if (b > 0 && b <= 3 ){
        cout << "1";
    }else if (b > 3 && b <= 6 ){
        cout << "2";
    }else if  (b > 6 && b <= 9 ){
        cout << "3";
    }else if  (b > 9 && b <= 12 ){
        cout << "4";
    }
    cout << endl;
}

