'''
Notes:
under the influence of 3 manhattans on the rocks... lessons learned here might not be remembered.
int main (int argc, const char * argv[])
{
    insertionSort( unsortedArray, 29, sortedArray );
    
    
    for( int i = 0; i < 29; i++ ){
        cout << "{ " << sortedArray[i] << " }";
    }
}

void insertionSort( int unsortedArray[], int length, int sortedArray[] ){ 
    int key, i;
    
    sortedArray[0] = unsortedArray[ 0 ];
    
    for( int j = 1; j < length; j++ ){
        key = unsortedArray[ j ];
        i = j - 1;
        while( i >= 0 && sortedArray[ i ] > key ){
            sortedArray[ i + 1 ] = sortedArray[ i ];
            i -= 1;
        }
        sortedArray[ i + 1 ] = key;
        
    }
    
}
'''
class InsertionSort(object):
	def __init__(self, unsorted):
		self.unsorted = unsorted
		self.sort()

	def sort():
		for item in self.unsorted:
			print item,



unsorted = [2,1,6,3,4,10,1,4,1,5,76,4,3,2,5,6,6,3,23,7,3,5,1,67,28,5,3,12,5]

insertionSort = InsertionSort(unsorted)