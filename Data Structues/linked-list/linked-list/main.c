//
//  main.c
//  linked-list
//
//  Created by Scott Haselton on 11/24/13.

#include <stdio.h>
#include <stdlib.h>



struct node{
    int value;
    struct node *leftSubtree;
    struct node *rightSubtree;
} node;

struct node *generateNode();
void addNodeToGraph( struct node *, struct node *);
void printInOrder( struct node * );

int main (int argc, const char * argv[])
{   
    srand(time(NULL));
    struct node *newNode;
    struct node *rootNode;
    
    rootNode = generateNode();
    
    for( int i = 0; i < 10; i++ ){
        newNode = generateNode();
        addNodeToGraph( rootNode, newNode );
    }
    
    printInOrder(rootNode);
    
    return 0;
}

void printInOrder( struct node *root ){
    if( NULL != root ){
        printInOrder(root->leftSubtree);
        printf("%p : %d\n", root, root->value);
        printInOrder(root->rightSubtree);
    }
}
    
void addNodeToGraph( struct node *root, struct node *newNode ){
    //printf("new node added %d\n", newNode->value);
    if( root->value <= newNode->value ){
        if( NULL == root->rightSubtree ){
            root->rightSubtree = newNode;
        }else{
            addNodeToGraph(root->rightSubtree, newNode);
        }
    }else{
        if( NULL == root->leftSubtree ){
            root->leftSubtree = newNode;
        }else{
            addNodeToGraph(root->leftSubtree, newNode);
        }
    }
};

struct node *generateNode(){    
    struct node *newNode = (struct node *) malloc(sizeof(struct node));
    newNode->value = (rand() % 100) + 1;
    return newNode;
};
