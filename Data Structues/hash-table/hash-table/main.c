//
//  main.c
//  hash-table
//
//  Created by Scott Haselton on 11/30/13.
//  Copyright (c) 2013 California State Long Beach. All rights reserved.
//

#include <stdio.h>
#include "hash.h"

int main (int argc, const char * argv[])
{

    // insert code here...
    install("Scott", "Haselton");
    install("Scott", "Haselton1"); // overwrites
    install("Harrison", "Spain");
    install("Erin", "Spain");
    install("Erin", "Haselton"); // overwrites
    return 0;
}

